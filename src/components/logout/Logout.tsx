import React from 'react';
import {carsApiLogin} from "../../api/cars-api";
import {Navigate, NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {logoutUserValue} from "../../app/reducer/auth-reducer";
import {PATH} from "../../PATH/PATH";

export const Logout = () => {
    const dispatch = useAppDispatch()

    const outValue = useAppSelector(state => state.auth.logoutValue)

    const logoutHandler = async () => {
        await carsApiLogin.userOutLogged('1')
        dispatch(logoutUserValue(!outValue));
    }

    if (outValue) {
        return <Navigate to={PATH.HOME}/>
    }

    return (
        <li onClick={logoutHandler}>
            <NavLink to={PATH.HOME}>Logout</NavLink>
        </li>
    );
};