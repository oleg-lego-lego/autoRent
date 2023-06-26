import React from 'react';
import {HeroPages} from "../components/HeroPages";
import {Footer} from "../components/Footer";

export const CommentPage = () => {
    return (
        <>
            <section className="testimonial-page">
                <HeroPages name={'Comment'}/>
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
                <Footer/>
            </section>
        </>
    );
};

