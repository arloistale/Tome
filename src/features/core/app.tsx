import './app.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AphorismSingle from "../aphorisms/aphorism-single";
import Nav from "./nav";
import AphorismList from "../aphorisms/aphorism-list";
import { useEffect } from "react";
import { fetchAphorismsAsync } from "../aphorisms/aphorismsSlice";
import { useAppDispatch } from "../../state/hooks";
import Header from './header';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAphorismsAsync());
  }, []);

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reflections" element={<Reflections />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  const Home = () => {
    return (
      <>
        <Nav />
        <Header />
        <AphorismSingle />
      </>
    );
  };
  
  const Reflections = () => {
    return (
      <>
        <Nav />
        <Header />
        <AphorismList />
      </>
    );
  };

export default App;