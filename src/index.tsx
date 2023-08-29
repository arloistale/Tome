import 'bulmaswatch/simplex/bulmaswatch.min.css';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { 
  Routes, 
  Route, 
  Link, 
  BrowserRouter
} from 'react-router-dom';

import { store } from './state/store';

import AphorismSingle from './features/aphorisms/aphorism-single';
import AphorismList from './features/aphorisms/aphorism-list';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </BrowserRouter>
  );
}

const Nav = () => {
  return (
    <nav>
    <Link to="/">Home</Link>
    <Link to="/history">History</Link>
  </nav>
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


const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);