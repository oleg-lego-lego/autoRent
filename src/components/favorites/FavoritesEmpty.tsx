import React from 'react';
import FavEmpty from "../../images/FavoritesEmpty.png"
import {NavbarLink} from "../navbar/NavbarLink";
import {PATH} from "../../App";

export const FavoritesEmpty = () => {
    return (
        <div className="container">
            <div className="favorites--emp">
                <div className="favorites--empty">
                    <h2>Корзина пустая
                        <span>😕</span>
                    </h2>
                    <p>Вероятней всего, вы не заказывали ещё пиццу.
                        <br/>
                        Для того, чтобы заказать пиццу,
                        <NavbarLink title={'перейди на главную страницу.'} to={PATH.HOME} className={''}/>
                    </p>
                    <img src={FavEmpty} alt="Empty favorites"/>

                </div>
            </div>
        </div>
    );
};

