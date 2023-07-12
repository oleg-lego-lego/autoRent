import React from 'react';
import {SelectCar} from "../components/home/SelectCar";
import {TakeUs} from "../components/home/TakeUs";
import {Download} from "../components/home/Download";
import {Faq} from "../components/home/fac/Faq";
import {Promo} from "../components/home/Promo";
import {BookCar} from "../components/home/book_car/BookCar";

export const Home = () => {
    return (
        <>
            <BookCar/>
            <SelectCar/>
            <Promo/>
            <TakeUs/>
            <Faq/>
            <Download/>
        </>
    );
};

