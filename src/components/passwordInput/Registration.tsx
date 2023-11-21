import React from 'react';
import {NavLink} from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import Paper from '@mui/material/Paper';
import {RegisterForm} from "./RegisterForm";
import {PATH} from "../../app/PATH/PATH";


export const Registration = () => {
    return (
        <Paper className="login__container" elevation={0}>
            <FormControl className="formControl">
                <h1 className="login__title">Sign up</h1>
                <RegisterForm/>
            </FormControl>
            <p className="login__text">Already have an account ?</p>
            <NavLink to={PATH.LOGIN} className="signUpLink">Sing in</NavLink>
        </Paper>
    );
};