import React from 'react';
import {PlanTrip} from "../components/about/PlanTrip";
import {CommentsBlog} from "../components/comment/CommentBlog";
import {SelectCar} from "../components/home/SelectCar";

export const Home = () => {
    return (
        <>
            <PlanTrip/>
            <CommentsBlog/>
            <SelectCar/>
        </>
    );
};

