import React from 'react';
import FavEmpty from "../../images/emptyFavotites.png"
import {NavbarLink} from "../navbar/NavbarLink";
import {PATH} from "../../App";

export const FavoritesEmpty = () => {
    return (
        <div className="container">
            <div className="favorites-section">
                <div className="favorites--empty">
                    <h2>Cart of favorite cars is empty.
                        <span> 😕</span>
                    </h2>
                    <p>You probably didn't choose a car.
                        In order to take the car you like, go to page...
                        <NavbarLink title={'Car Models'} to={PATH.MODELS} className={'favorites--empty-link'}/>
                    </p>
                    <img src={FavEmpty} alt="Empty favorites"/>
                </div>
            </div>
        </div>
    );
};

