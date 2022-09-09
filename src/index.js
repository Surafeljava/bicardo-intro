import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {CssBaseline} from '@mui/material';
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CssBaseline/>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);