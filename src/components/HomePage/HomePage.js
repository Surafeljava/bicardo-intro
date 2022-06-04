import React, {useState, useEffect} from 'react';
import {Grid, IconButton, Button, Typography} from '@mui/material';

import { useSelector, useDispatch} from 'react-redux';
import { Increment, Decrement } from '../../actions/countActions';
import { FetchTodos } from '../../actions/todoActions';

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

    const counter = useSelector(state => state.counter);
    const todo = useSelector(state => state.todo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FetchTodos());
    }, [dispatch]);


    return (
        <Grid container direction='column' alignItems='center' justifyContent='space-between' width='100%' height='100vh' style={{backgroundColor: '#FDF9CC'}}>
            <Grid container justifyContent='center' marginTop={1}>
                <Typography color='secondary' style={{fontSize: 25, fontWeight: 300, letterSpacing: 3}}> Coming Soon! </Typography>
            </Grid>
            <Grid container xs={widthSize} justifyContent='center'>
                <Grid item >
                    <img src={logo} alt="Logo" width="100%"/>
                </Grid>
                <Grid container direction='row' alignItems='center'>
                    <h3> {counter} </h3>
                    &nbsp;&nbsp;&nbsp;
                    <Grid item>
                        <Button color='secondary' onClick={() => {
                            dispatch(Increment(5));
                        }}>
                            INCREMENT
                        </Button>
                    </Grid>
                    &nbsp;&nbsp;&nbsp;
                    <Grid item>
                        <Button color='secondary' onClick={() => {
                            dispatch(Decrement());
                        }}>
                            DECREMENT
                        </Button>
                    </Grid>
                </Grid>
                {todo.error != null && <p>{todo.error}</p>}
                {todo.loading && <p>Loading...</p>}
                {todo.id !== 0 && (
                    <Grid container direction='column'>
                        <h3> {todo.id} </h3>
                        <h5> {todo.text} </h5>
                    </Grid>
                )}
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