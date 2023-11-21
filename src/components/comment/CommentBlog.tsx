import React from 'react';
import {Comment} from "./Comment";
import {comment} from "../../ data/comentBLog";


export const CommentsBlog = () => {
    return (
        <section className="comment__blog">
            <div className="container">
                <div className="comment__content">
                    <div className="comment__title">
                        <h4>Feedback from people</h4>
                        <h2>Customer Reviews</h2>
                        <p>
                            Explore the positive influence we've had on our clients by reviewing their testimonials.
                            Our clients have encountered our services and outcomes,
                            and they are enthusiastic about sharing their favorable experiences with you.
                        </p>
                    </div>

                    <div className="all__comment">
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
