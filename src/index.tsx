import 'bulmaswatch/simplex/bulmaswatch.min.css';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './state/store';
import App from './features/core/app';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);