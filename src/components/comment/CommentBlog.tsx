import React from 'react';
import Img3 from "../../images/testimonials/pfp2.jpg";
import {Comment} from "./Comment";
import Img2 from "../../images/testimonials/pfp1.jpg";

export type CommentType = {
    comment: string
    name: string
    city: string
    img: string
}

const comment: CommentType[] = [
    {
        comment: 'We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.',
        name: 'Parry Hotter',
        city: 'Belgrade',
        img: Img2
    },
    {
        comment: 'The car was in great condition and made our trip even better. Highly recommend for this car rental website!',
        name: 'Ron Rizzly',
        city: 'Novi Sad',
        img: Img3
    }
]

export const CommentsBlog = () => {
    return (
        <>
            <section className="testimonials-section">
                <div className="container">
                    <div className="testimonials-content">
                        <div className="testimonials-content__title">
                            <h4>Reviewed by People</h4>
                            <h2>Client's Testimonials</h2>
                            <p>
                                Discover the positive impact we've made on the our clients by
                                reading through their testimonials. Our clients have experienced
                                our service and results, and they're eager to share their
                                positive experiences with you.
                            </p>
                        </div>

                        <div className="all-testimonials">
                            {comment.map(el => {
                                return (
                                    <Comment comment={el}/>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
