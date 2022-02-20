import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "./App.css";
import SignUp from "./Components/SignUp";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState } from "react";
function App() {
    const [state, setstate] = useState(false)
    const Item = styled(Paper)(({ theme }) => ({
        // padding: theme.spacing(1),
        textAlign: 'center',
        // color: theme.palette.text.secondary,
        // marginTop:50,
    }));
    return (
        <Grid  container direction="column"
            alignItems="center"
            justifyContent="center">
            <Box sx={{ flexGrow: 1 }} className="card">
                <Grid container spacing={2} direction="column"
                    alignItems="center"
                    justifyContent="center">
                    <Grid  mt={2} item xs={12}>
                        <ToggleButtonGroup
                            exclusive
                            aria-label="text alignment"
                            className='btn_group' >
                            <ToggleButton value="left" onClick={() => setstate(false)} aria-label="left aligned" className={!state ? "btn_Active" : "btn"} color="primary">
                                Fan SignUp
                            </ToggleButton>
                            <ToggleButton value="center" onClick={() => setstate(true)} aria-label="right aligned" className={state ? "btn_Active" : "btn"} color="primary">
                                Talent SignUp
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>
                    <Grid item xs={8}>
                        <SignUp header={state ? "Talent" : "Fan"} />
                    </Grid>
                </Grid>
            </Box>
        </Grid>


    )
}

export default App
