import React from 'react';
import {CommentType} from "./CommentBlog";

type CommentPropsType = {
    comment: CommentType
}

export const Comment = (props: CommentPropsType) => {
    return (
        <div className="all-testimonials__box box-2">
                <span className="quotes-icon">
                    <i className="fa-solid fa-quote-right"></i>
                </span>
            <p>
                {props.comment.comment}
            </p>
            <div className="all-testimonials__box__name">
                <div className="all-testimonials__box__name__profile">
                    <img src={props.comment.img} alt="user_img"/>
                    <span>
                      <h4>{props.comment.name}</h4>
                      <p>{props.comment.city}</p>
                    </span>
                </div>
            </div>
        </div>
    );
};
