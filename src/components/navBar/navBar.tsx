import React from 'react';
import logo from "../../images/carLogo.png"

export const NavBar = () => {
    return (
        <>
            <nav>
                <div>
                    <div>
                        <img src={logo} alt={'logo'}/>
                    </div>
                    <div>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

