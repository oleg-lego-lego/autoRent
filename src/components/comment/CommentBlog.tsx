import React from 'react';
import {Comment} from "./Comment";
import {comment} from "../../app/reducer/comentBlog/comentBLog";


export const CommentsBlog = () => {
    return (
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
                                <Comment comment={el} key={el.id}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
