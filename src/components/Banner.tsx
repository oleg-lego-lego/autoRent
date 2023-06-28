import React from 'react';
import {ContactUs} from "./ContactUs";

const Banner = () => {
    return (
        <div className="book-banner">
            <div className="book-banner__overlay"></div>
            <div className="container">
                <div className="text-content">
                    <h2>To reserve a car, reach out to us and we'll assist you.</h2>
                    <ContactUs title={'(44) 444-44-44'} href={'tel:444444444'}/>
                </div>
            </div>
        </div>
    );
};

export default Banner;