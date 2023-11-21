import React from 'react';
import {BookCarType} from "../../app/reducer/bookCar/bookCar";

type LoginListPropsType = {
    bookCar: BookCarType
}

export const LoginList = (props: LoginListPropsType) => {
    return (
        <div>
            <p>{props.bookCar.age}</p>
            <p>{props.bookCar.carImg}</p>
            <p>{props.bookCar.carType}</p>
            <p>{props.bookCar.name}</p>
            <p>{props.bookCar.dropTime}</p>
            <p>{props.bookCar.phone}</p>
            <p>{props.bookCar.pickTime}</p>
        </div>
    );
};
