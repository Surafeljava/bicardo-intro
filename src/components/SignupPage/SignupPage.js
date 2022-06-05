import { Grid, Typography, TextField, Button} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function SignupPage(){

    return (
        <Grid container direction='column' width='100vw' height='100vh' justifyContent='center' alignItems='center'>
            <Grid item>
                <Typography variant='h4' style={{letterSpacing: 3, fontWeight: 600}}> SIGNUP </Typography>
            </Grid>
            <br />
            <Grid container direction='column' width='25vw'>
                <Grid item >
                    <TextField fullWidth label='Enter Email' placeholder='abc@someplace.com' type='email' />
                </Grid>
            </Grid>
            <br />
            <Grid container direction='row' width='25vw' justifyContent='center'>
                <Button endIcon={<ArrowForwardIcon color='primary' style={{fontSize: 25, marginLeft: 20}}/>}>
                    <Typography variant='h6' style={{letterSpacing: 1, fontWeight: 400}}> SEND CODE </Typography>
                </Button>
            </Grid>
        </Grid>
    );
}

export default SignupPage;