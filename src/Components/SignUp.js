import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios"
import Checkbox from '@mui/material/Checkbox';
import "./Signup.css"
const SignUp = (props) => {
    const [checked, setchecked] = useState(false)
    const [inputField, setInputField] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        username: ''
    })

    const handleData = (e) => {
        setInputField({ ...inputField, [e.target.name]: e.target.value })
    }
    const submitButton = (e) => {
        let header = props.header
        let id = header == "Fan" ? "fan" : "talent"
        e.preventDefault();
        if (checked) {
            axios.post(`http://wren.in:3200/api/sign-up/${id}`, inputField)
                .then(alert("Data send"))
        }
        else(alert("Please confirm Terms and condition"))
    }
    return <React.Fragment>
        <Grid container spacing={2} direction="column"
            alignItems="center"
            justifyContent="center" >
            <Grid item xs={8} md={12} >
                <Typography variant="h4" component="div"  >
                    Create Your {props.header} Account
                </Typography>
            </Grid>
            <Grid item  >
                <Typography variant="caption" display="block" >First Name*</Typography>
                <TextField className="inputs" type="text" placeholder="First Name" name="first_name" value={inputField.firstname} id="outlined-basic" fullWidth variant="outlined" md={12} onChange={handleData} />
            </Grid>
            <Grid item >
                <Typography variant="caption" display="block" >Last Name*</Typography>
                <TextField placeholder=" Last Name" name="last_name" value={inputField.lastname} id="outlined-basic" fullWidth variant="outlined" onChange={handleData} />
            </Grid>
            <Grid item >
                <Typography variant="caption" display="block" >Username*</Typography>
                <TextField placeholder="Username" name="username" value={inputField.username} id="outlined-basic" fullWidth variant="outlined" onChange={handleData} />
            </Grid>
            <Grid item >
                <Typography variant="caption" display="block" >Email*</Typography>
                <TextField placeholder="Email" name="email" value={inputField.email} id="outlined-basic" fullWidth variant="outlined" onChange={handleData} />
            </Grid>
            <Grid item >
                <Typography variant="caption" display="block" >Password*</Typography>
                <TextField placeholder="Password" name="password" value={inputField.password} id="outlined-basic" fullWidth variant="outlined" onChange={handleData} />
            </Grid>
            <Grid item >
                <Checkbox color="success" onChange={() => setchecked(!checked)} /> I agree to the <span className="terms">Terms and Conditions.</span>
            </Grid>
            <Grid item >
                <Button className="btn_submit" onClick={submitButton} >Submit</Button>
            </Grid>
        </Grid>

    </React.Fragment >;
};

export default SignUp;