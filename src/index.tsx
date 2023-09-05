import 'bulmaswatch/simplex/bulmaswatch.min.css';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './state/store';

import { QueryClient, QueryClientProvider } from 'react-query';
import App from './components/core/app';

const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <Provider store={store}>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </Provider>
);