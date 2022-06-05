import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {CssBaseline} from '@mui/material';

// import CountReducer from './reducers/countReducer';
import allReducers from './reducers';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { BrowserRouter as Router } from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: "#F06161" 
        },
        secondary: {
            main: "#151F2E"
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


const store = createStore(
  allReducers,
  applyMiddleware(thunk)
  );


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Router>
          <CssBaseline/>
          <App />
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);