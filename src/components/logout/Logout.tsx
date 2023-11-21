import React from 'react';
import {Navigate, NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks/redux";
import {PATH} from "../../app/PATH/PATH";
import {fetchUserLogout} from "../../app/reducer/login/login-reducer";

export const Logout = () => {
    const dispatch = useAppDispatch()

    const outValue = useAppSelector(state => state.auth.logoutValue)
    const isDisabled = useAppSelector(state => state.isLoading.disabled)

    const logoutHandler = () => {
        dispatch(fetchUserLogout({id: '1', logoutValue: !outValue}))
    }

    if (outValue) {
        return <Navigate to={PATH.HOME}/>
    }

    const styleIsDisabled = isDisabled ? {pointerEvents: "none" as const} : {}

    return (
        <li>
            <NavLink
                onClick={logoutHandler}
                to={PATH.HOME}
                style={styleIsDisabled}
            >
                Logout
            </NavLink>
        </li>
    );
};