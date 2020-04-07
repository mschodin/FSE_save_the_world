import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import LoginPage from './containers/LoginPage';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  //<App />,
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);