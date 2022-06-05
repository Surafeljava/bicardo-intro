import React, {useState, useEffect, useRef} from 'react';
import {Grid, IconButton, Button, Typography} from '@mui/material';

import { useSelector, useDispatch} from 'react-redux';
import { Increment, Decrement } from '../../actions/countActions';
import { FetchTodos } from '../../actions/todoActions';

// import { makeStyles } from '@mui/material'; 
import { styled } from '@mui/system';

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

import logo from '../../assets/logo/logo_black.png';

function HomePage() {

    const target = useRef();

    const MyComponent = styled('div')({
        position: "relative",
        height: 500,
        width: 800,
        // overflow: "hidden", // Try removing this to see how the sheen works!
        "--screenX": 0 /* Set these with JavaScript */,
        "--screenY": 0,
        "&:after": {
            position: "absolute",
            top: -400,
            right: -400,
            bottom: -400,
            left: -400,
            background:
                "linear-gradient(217deg, rgba(255,255,255,0), rgba(255,255,255,0) 35%, rgba(255,255,255,0.25) 45%, rgba(255,255,255,.25) 50%, rgba(255,255,255,0) 60%, rgba(255,255,255,0) 100%)",
            transform: "translateX(var(--screenX)) translateY(var(--screenY))"
        }
    });

    var mWidth = window.innerWidth>1600 ? 6 : 8;
    const [widthSize, setWidthSize] = useState(mWidth);

    const onWidthChange = () => {
        var size = window.innerWidth>1600 ? 6 : 8;
        setWidthSize(size);
    }

    window.addEventListener('resize', onWidthChange);

    const counter = useSelector(state => state.counter);
    const todo = useSelector(state => state.todo);
    const dispatch = useDispatch();

    
    function handleMouseMove(event) {
        const height = window.innerHeight;
        const width = window.innerWidth;
        // Creates angles of (-20, -20) (left, bottom) and (20, 20) (right, top)
        const yAxisDegree = (event.pageX / width) * 40 - 20;
        const xAxisDegree = (event.pageY / height) * -1 * 40 + 20;
        target.current.style.transform = `rotateY(${yAxisDegree}deg) rotateX(${xAxisDegree}deg)`;
        // Set the sheen position
        setSheenPosition(event.pageX / width, event.pageY / width);
    }

    function setSheenPosition(xRatio, yRatio) {
        // This creates a "distance" up to 200px each direction to offset the sheen
        const xOffset = 1 - (xRatio - 0.5) * 400;
        const yOffset = 1 - (yRatio - 0.5) * 400;
        target.current.style.setProperty("--screenX", `${xOffset}px`);
        target.current.style.setProperty("--screenY", `${yOffset}px`);
    }
    
    useEffect(() => {
        dispatch(FetchTodos());
        document.onmousemove = handleMouseMove;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    return (
        <Grid container direction='column' alignItems='center' justifyContent='space-between' width='100%' height='100vh' style={{background: 'linear-gradient(45deg, #FE6B8BAA 20%, #FF8E53AA 80%)'}}>
            <Grid container justifyContent='center' marginTop={1}>
                <Typography color='secondary' style={{fontSize: 25, fontWeight: 300, letterSpacing: 3}}> Coming Soon! </Typography>
            </Grid>
            <Grid container xs={widthSize} justifyContent='center'>
                <Grid item>
                    <MyComponent ref={target}>
                        <div >
                            <div >
                                <img src={logo} alt="Logo" width="100%"/>
                            </div>
                        </div>
                    </MyComponent>
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