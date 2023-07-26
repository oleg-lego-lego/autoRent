import React from 'react';
import {CollapsibleTable} from "./TableBookCar";
import FormControl from "@mui/material/FormControl";
import {LoginForm} from "../passwordInput/LoginForm";
import {NavLink} from "react-router-dom";
import Paper from "@mui/material/Paper";

export const LoginAccount = () => {
    return (
        <div className="container">
            <div className="favorites-section">
                <div className="favorites--empty">
                    {/*<CollapsibleTable/>*/}

                    <Paper className={'login__container'} elevation={0}>
                        <FormControl className={'formControl'}>
                            <h1 className={'login__title'}>Sign in</h1>
                            <LoginForm/>
                        </FormControl>
                        <p className={'login__text'}>Do not have an account ?</p>
                        <NavLink to={'Path.Registration'} className={'signUpLink'}>Sing up</NavLink>
                    </Paper>
                </div>
            </div>
        </div>
    );
};
