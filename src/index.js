import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {CssBaseline} from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { BrowserRouter as Router } from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: "#FDF9CC" 
        },
        secondary: {
            main: "#1A2030"
        }
    },
    typography: {
      button: {
        textTransform: 'none'
      }
    },
    cardcontent: {
      paddingLeft: 0,
      paddingRight:0,
      paddingTop:0,
      paddingBottom: 0,
    },
    
    
});


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline/>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);