import React, {useState} from 'react';
import {Grid, IconButton, Typography} from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

import logo from '../../assets/logo/logo_black.png';

function HomePage() {

    var mWidth = window.innerWidth>1600 ? 6 : 8;
    const [widthSize, setWidthSize] = useState(mWidth);

    const onWidthChange = () => {
        var size = window.innerWidth>1600 ? 6 : 8;
        setWidthSize(size);
    }

    window.addEventListener('resize',onWidthChange);


    return (
        <Grid container direction='column' alignItems='center' justifyContent='space-between' width='100%' height='100vh' style={{backgroundColor: '#FDF9CC'}}>
            <Grid container justifyContent='center' marginTop={1}>
                <Typography color='secondary' style={{fontSize: 25, fontWeight: 300, letterSpacing: 3}}> Coming Soon! </Typography>
            </Grid>
            <Grid container xs={widthSize} justifyContent='center'>
                <Grid item >
                    <img src={logo} alt="Logo" width="100%"/>
                </Grid>
            </Grid>
            <Grid container justifyContent='space-evenly' marginBottom={1}>
                <IconButton>
                    <InstagramIcon color='secondary' style={{fontSize: 40}}/>
                </IconButton>

                <IconButton>
                    <LinkedInIcon color='secondary' style={{fontSize: 40}}/>
                </IconButton>

                <IconButton>
                    <TwitterIcon color='secondary' style={{fontSize: 40}}/>
                </IconButton>
            </Grid>
        </Grid>
    );
}

export default HomePage;