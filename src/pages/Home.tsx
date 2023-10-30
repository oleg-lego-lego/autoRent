import React, {useEffect} from 'react';
import {SelectCar} from "../components/home/SelectCar";
import {TakeUs} from "../components/home/TakeUs";
import {Download} from "../components/home/download/Download";
import {Faq} from "../components/home/fac/Faq";
import {Promo} from "../components/home/Promo";
import {BookCar} from "../components/home/book_car/BookCar";
import {HomeHeader} from "../components/home/homeHeader/HomeHeader";
import {useAppDispatch} from "../hooks/redux";
import {carsApiLogin} from "../api/cars-api";
import {getAuthUser} from "../app/reducer/auth-reducer";

export const Home = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        carsApiLogin.getUserInLogged()
            .then(res => {
                dispatch(getAuthUser(res.data))
            })
    }, [dispatch])

    return (
        <>
            <HomeHeader/>
            <BookCar/>
            <SelectCar/>
            <Promo/>
            <TakeUs/>
            <Faq/>
            <Download/>
        </>
    );
};

