import React from 'react';

const Banner = () => {
    return (
        <div className="book-banner">
            <div className="book-banner__overlay"></div>
            <div className="container">
                <div className="text-content">
                    <h2>Book a car by getting in touch with us</h2>
                    <span>
                            <i className="fa-solid fa-phone"></i>
                             <h3>(123) 456-7869</h3>
                        </span>
                </div>
            </div>
        </div>
    );
};

export default Banner;