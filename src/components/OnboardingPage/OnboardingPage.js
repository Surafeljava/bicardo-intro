import {Grid} from '@mui/material';

import logo from '../../assets/logo/logo_black.png';

function OnboardingPage() {
  return (
      <Grid container direction="column" width="100%" height="100vh" justifyContent="center" alignItems="center">
        <Grid item >
            <img src={logo} alt="Bicardo Logo" />
        </Grid>
    </Grid>
  );
}

export default OnboardingPage;