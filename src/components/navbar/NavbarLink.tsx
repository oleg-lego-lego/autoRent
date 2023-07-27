import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../../App";

type NavbarLinkProps = {
    to: PATH
    title: string
    className?: string
}

export const NavbarLink = (props: NavbarLinkProps) => {
    const setActive = ({isActive}: { isActive: boolean }) => ({color: isActive ? 'red' : ''})

    return (
        <li>
            <NavLink style={setActive} to={props.to}>
                {props.title}
            </NavLink>
        </li>
    );
};

