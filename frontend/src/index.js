import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './NavBar';

ReactDOM.render(
  //<h1>Hello, world! THe number you are looking for is: </h1>,
  // <App />,
  <NavBar />,
  document.getElementById('root')
);

ReactDOM.render(
  //<h1>Hello, world! THe number you are looking for is: </h1>,
  <App />,
  // <NavBar />,
  document.getElementById('root')
);