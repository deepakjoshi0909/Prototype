// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// Render the main App component into the root element of the HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Matches with the 'root' div in public/index.html
);
