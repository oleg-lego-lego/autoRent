import React from 'react';
import {SelectCar} from "../components/home/SelectCar";
import {TakeUs} from "../components/home/TakeUs";
import {Download} from "../components/home/Download";
import {Faq} from "../components/home/fac/Faq";
import {Promo} from "../components/home/Promo";

export const Home = () => {
    return (
        <>
            <SelectCar/>
            <Promo/>
            <TakeUs/>
            <Faq/>
            <Download/>
        </>
    );
};

