import './app.css'

import { Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { fetchAphorismsAsync } from "../aphorisms/aphorismsSlice";
import { useAppDispatch } from "../../state/hooks";
import Nav from './nav';
import Footer from './footer';

const Home = lazy(() => import('../pages/home'));
const Reflections = lazy(() => import('../pages/reflections'));
const About = lazy(() => import('../pages/about'));

const Fallback = () => {
  return <>...</>
}

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAphorismsAsync());
  }, []);

    return (
      <div className="page-container">
        <Nav />
        <Routes>
          <Route path="/" element={<Suspense fallback=<Fallback />><Home /></Suspense>} />
          <Route path="/reflections" element={<Suspense fallback=<Fallback />><Reflections /></Suspense>} />
          <Route path="/about" element={<Suspense fallback=<Fallback />><About /></Suspense>} />
        </Routes>
        <Footer />
      </div>
    );
  }

export default App;