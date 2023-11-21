import React from 'react';
import {ContactUs} from "../components/home/ContactUs";
import {ToContactUs} from "../ data/toContactUs";

export const Banner = () => {
    return (
        <div className="book__banner">
            <div className="banner__overlay"></div>
            <div className="container">
                <div className="banner__text">
                    <h2>To reserve a car, reach out to us and we'll assist you.</h2>
                    <ContactUs title={ToContactUs.TELEPHONE} href={'tel:' + ToContactUs.TELEPHONE}/>
                </div>
            </div>
        </div>
    );
};
