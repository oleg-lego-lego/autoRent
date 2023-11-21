import React from 'react';
import {PATH} from "../../../app/PATH/PATH";
import {NavLink} from "react-router-dom";

type RedirectToPagePropsType = {
    to: PATH
    className: string
    text: string
}

export const RedirectToPage = (props: RedirectToPagePropsType) => {
    return (
        <NavLink to={props.to} className={props.className}>
            {props.text}
        </NavLink>
    );
};
