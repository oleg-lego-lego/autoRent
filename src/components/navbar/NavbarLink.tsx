import React from 'react';
import {Link} from "react-router-dom";

type NavbarLinkProps = {
    className: string
    to: string
    title: string
}

export const NavbarLink = (props: NavbarLinkProps) => {
    return (
        <li>
            <Link className={props.className} to={props.to}>{props.title}</Link>
        </li>
    );
};

