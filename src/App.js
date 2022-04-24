import {Grid} from '@mui/material';
import { Routes, Route,} from "react-router-dom";

import HomePage from './components/HomePage/HomePage';
import Registration from './components/Registration/Registration';
import About from './components/About/About';


function App() {
  return (
    <Grid container direction="column" width="100%" justifyContent="center" alignItems="center">      
      <Grid item width="100%">
        <Routes>          
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Grid>
    </Grid>
  );
}

export default App;
