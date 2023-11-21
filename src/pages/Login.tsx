import React from 'react';
import {LoginAccount} from "../components/login_account/LoginAccount";
import {HeroPages} from "../components/heroPages/HeroPages";

export const Login = () => {
    return (
        <>
            <HeroPages name={'Login'}/>
            <LoginAccount/>
        </>
    );
};
