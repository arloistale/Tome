import { BrowserRouter, Route, Routes } from "react-router-dom";
import AphorismSingle from "../aphorisms/aphorism-single";
import Nav from "./nav";
import AphorismList from "../aphorisms/aphorism-list";
import { useEffect } from "react";
import { fetchAphorismsAsync } from "../aphorisms/aphorismsSlice";
import { useAppDispatch } from "../../state/hooks";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAphorismsAsync());
  }, []);

    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </BrowserRouter>
    );
  }
  
  const Home = () => {
    return (
      <>
        <Nav />
        <AphorismSingle />
      </>
    );
  };
  
  const History = () => {
    return (
      <>
        <Nav />
        <AphorismList />
      </>
    );
  };

export default App;