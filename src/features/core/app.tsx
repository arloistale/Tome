import './app.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AphorismSingle from "../aphorisms/aphorism-single";
import Nav from "./nav";
import AphorismList from "../aphorisms/aphorism-list";
import { useEffect } from "react";
import { fetchAphorismsAsync } from "../aphorisms/aphorismsSlice";
import { useAppDispatch } from "../../state/hooks";
import TodayIsHeader from './today-is-hero';
import AboutHeader from './about-hero';

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
        <TodayIsHeader />
        <div className='columns'>
          <div className='column'> </div>
          <div className='column is-three-quarters'>
            <section className='section'>
              <AphorismSingle />
            </section>
          </div>
          <div className='column'> </div>
        </div>
      </>
    );
  };
  
  const Reflections = () => {
    return (
      <>
        <Nav />
        <AboutHeader />
        <div className='columns'>
          <div className='column'></div>
          <div className='column is-three-quarters'>
            <section className='section'>
              <AphorismList />
            </section>
          </div>
          <div className='column'></div>
        </div>
      </>
    );
  };

export default App;