import React from 'react';
import {LoginList} from "./LoginList";
import {useAppSelector} from "../../hooks/redux";

export const LoginAccount = () => {
    const bookCarList = useAppSelector(state => state.bookCar.bookCar)

    return (
        <div className="container">
            <div className="favorites-section">
                <div className="favorites--empty">
                    {bookCarList.map(el => {
                        return (
                            <LoginList bookCar={el}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};
