// import {useState, useEffect} from 'react';

import {Grid} from '@mui/material';
import { Routes, Route,} from "react-router-dom";

import HomePage from './components/HomePage/HomePage';
import Registration from './components/Registration/Registration';
import About from './components/About/About';
import SignupPage from './components/SignupPage/SignupPage';

// import OnboardingPage from './components/OnboardingPage/OnboardingPage';


function App() {
  return (
    <Grid container direction="column" width="100%" justifyContent="center" alignItems="center">      
      <Grid item width="100%">
        <Routes>          
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Grid>
    </Grid>
  );
}

export default App;
