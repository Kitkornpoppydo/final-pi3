import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import router
import { BrowserRouter as Router } from 'react-router-dom';

import UtccContextProvider from './components/UtccContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UtccContextProvider>
    <Router>
    <React.StrictMode>
        <App />
    </React.StrictMode>
    </Router>
  </UtccContextProvider>

);
