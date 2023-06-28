import React from 'react';

const Banner = () => {
    return (
        <div className="book-banner">
            <div className="book-banner__overlay"></div>
            <div className="container">
                <div className="text-content">
                    <h2>To reserve a car, reach out to us and we'll assist you.</h2>
                    <span>
                        <a href="tel:12345678">(44) 444-44-44</a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Banner;