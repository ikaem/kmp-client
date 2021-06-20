import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Providers } from './providers';

axios.defaults.baseURL = process.env.REACT_APP_API_URL as string;

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
);
