import React, {useEffect, useState} from 'react';
import logo from "../../images/logo/carLogo.png"
import menu from "../../images/logo/menu-vector.png"
import {Link} from "react-router-dom";
import {NavbarNavigation} from "./NavbarNavigation";
import {PATH} from "../../app/PATH/PATH";



export const Navbar = () => {
    const [nav, setNav] = useState(false);

    const openNav = (openValue: boolean) => setNav(openValue);

    useEffect(() => {
        if (nav) {
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.body.style.overflow = 'visible'
        };
    }, [nav]);

    return (
        <nav>
            <div className="navbar">
                <div className="navbar__img">
                    <Link to={PATH.HOME}>
                        <img src={logo} alt={'logo'}/>
                    </Link>
                </div>
                <ul className="navbar__links">
                    <NavbarNavigation openNav={openNav} openValue={false}/>
                </ul>
                <div className="mobile__menu" onClick={() => openNav(true)}>
                    <img src={menu} alt={'menu'}/>
                </div>
            </div>


            {/*/!* mobile *!/*/}
            <div className={`mobile__navbar ${nav ? "open__nav" : ""}`}>
                <div onClick={() => openNav(false)} className="mobile__navbar__close">
                    <i>x</i>
                </div>
                <ul className="mobile__navbar__links">
                    <NavbarNavigation openNav={openNav} openValue={true}/>
                </ul>
            </div>
        </nav>
    );
};

