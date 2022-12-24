//react
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

//store
import { store } from './redux/store/store';

//components
import App from './App'

//styles
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

