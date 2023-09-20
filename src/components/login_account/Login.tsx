import React from 'react';
import {LoginAccount} from "./LoginAccount";
import {HeroPages} from "../HeroPages";

export const Login = () => {
    return (
        <>
            <HeroPages name={'Login'}/>
            <LoginAccount/>
        </>
    );
};
