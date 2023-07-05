import React from 'react';
import {PlanTrip} from "../components/about/PlanTrip";
import {CommentsBlog} from "../components/comment/CommentBlog";
import {SelectCar} from "../components/home/SelectCar";
import {TakeUs} from "../components/home/TakeUs";
import {Download} from "../components/home/Download";
import {Faq} from "../components/home/Faq";
import {Promo} from "../components/home/Promo";

export const Home = () => {
    return (
        <>
            <PlanTrip/>
            <CommentsBlog/>
            <TakeUs/>
            <SelectCar/>
            <Promo/>
            <Faq/>
            <Download/>
        </>
    );
};

