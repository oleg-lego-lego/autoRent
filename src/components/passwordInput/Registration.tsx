import React from 'react';
import {NavLink} from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import Paper from '@mui/material/Paper';
import s from '../Login/Login.module.scss';
import {RegisterForm} from "./RegisterForm";



export const Registration = () => {
    return (
        <Paper className={s.container} elevation={6}>
            <FormControl className={s.FormControl}>
                <h2 className={s.title}>Sign up</h2>
                <RegisterForm/>
            </FormControl>
            <p className={s.text}>Already have an account ?</p>
            <NavLink to={'Path.Login'} className={s.signUpLink}>Sing in</NavLink>
        </Paper>
    );
};