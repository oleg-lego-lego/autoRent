import React from 'react';
import {CommentType} from "../../ data/comentBLog";


type CommentPropsType = {
    comment: CommentType
}

export const Comment = (props: CommentPropsType) => {
    return (
        <div className="comment__box">
            <p>
                {props.comment.comment}
            </p>
            <div className="comment__name">
                <div className="comment__profile">
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
