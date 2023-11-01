import React from 'react';
import {carsApiLogin} from "../../api/cars-api";
import {Navigate} from "react-router-dom";
import {PATH} from "../../App";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {logoutUserValue} from "../../app/reducer/auth-reducer";

export const Logout = () => {
    const dispatch = useAppDispatch()

    const outValue = useAppSelector(state => state.auth.logoutValue)

    const logoutHandler = async () => {
        await carsApiLogin.userOutLogged('1')
        await new Promise(resolve => setTimeout(resolve, 2000))
        dispatch(logoutUserValue(!outValue));
    }

    if (outValue) {
        return <Navigate to={PATH.HOME}/>
    }

    return (
        <li onClick={logoutHandler}>
            <a>Logout</a>
        </li>
    );
};