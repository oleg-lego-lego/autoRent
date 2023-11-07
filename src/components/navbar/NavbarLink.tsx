import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../../PATH/PATH";


type NavbarLinkProps = {
    to: PATH
    title: string
    className?: string
    openNav?: (openValue: boolean) => void
    openValue?: boolean
}

export const NavbarLink = (props: NavbarLinkProps) => {
    const setActive = ({isActive}: { isActive: boolean }) => ({color: isActive ? 'red' : ''})

    const openNav = () => {
        props.openValue
            ? props.openNav && props.openNav(!props.openValue)
            : props.openNav && props.openValue && props.openNav(props.openValue)
    }

    return (
        <li>
            <NavLink style={setActive} to={props.to} onClick={openNav} className={props.className}>
                {props.title}
            </NavLink>
        </li>
    );
};

