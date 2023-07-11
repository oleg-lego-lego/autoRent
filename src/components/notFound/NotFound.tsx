import React from 'react';
import {NavbarLink} from "../navbar/NavbarLink";
import {PATH} from "../../App";
import notFound from "../../images/notFound.png";

export const NotFound = () => {
    return (
        <div className="container">
            <div className="favorites-section">
                <div className="favorites--empty">
                    <h2>Web page not found.
                        <span> 😕</span>
                    </h2>
                    <p>It looks like the page you are looking for has disappeared! go to page...
                        <NavbarLink title={'Home'} to={PATH.HOME} className={'favorites--empty-link'}/>
                    </p>
                    <img src={notFound} alt="Empty favorites" className={'notFound_img'}/>
                </div>
            </div>
        </div>
    );
};

