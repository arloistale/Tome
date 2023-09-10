import './app.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { fetchAphorismsAsync } from "../aphorisms/aphorismsSlice";
import { useAppDispatch } from "../../state/hooks";
import { About, Home, Reflections } from './pages';

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
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    );
  }

export default App;