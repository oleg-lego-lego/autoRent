import React from 'react';
import {Link} from "react-router-dom";
import {PATH} from "../../App";

type NavbarLinkProps = {
    className: string
    to: PATH
    title: string
}

export const NavbarLink = (props: NavbarLinkProps) => {
    return (
        <li>
            <Link className={props.className} to={props.to}>{props.title}</Link>
        </li>
    );
};

