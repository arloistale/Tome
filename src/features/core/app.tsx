import { Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { fetchAphorismsAsync } from "../aphorisms/aphorismsSlice";
import { useAppDispatch } from "../../state/hooks";
import PageLayout from "../pages/page-layout";

const Home = lazy(() => import('../pages/home'));
const Reflections = lazy(() => import('../pages/reflections'));
const About = lazy(() => import('../pages/about'));

const Fallback = () => {
  return <></>;
};

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAphorismsAsync());
  }, [dispatch]);

    return (
      <>
        <Routes>
          <Route path="/" element={<Suspense fallback=<Fallback />><PageLayout><Home /></PageLayout></Suspense>} />
          <Route path="/reflections" element={<Suspense fallback=<Fallback />><PageLayout><Reflections /></PageLayout></Suspense>} />
          <Route path="/about" element={<Suspense fallback=<Fallback />><PageLayout><About /></PageLayout></Suspense>} />
        </Routes>
      </>
    );
  }

export default App;