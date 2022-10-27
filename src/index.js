import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

const virtualEnv = document.getElementById('root')

if (virtualEnv !== null) {
  const root = ReactDOM.createRoot(virtualEnv);

  root.render(
    <React.StrictMode>
      <Router>
        <App />
    </Router>
    </React.StrictMode>
  );
}
