import React from 'react';
import {HeroPages} from "../components/HeroPages";
import {CommentsBlog} from "../components/comment/CommentBlog";

export const CommentPage = () => {
    return (
        <>
            <section className="testimonial-page">
                <HeroPages name={'Comment'}/>
                <CommentsBlog/>
            </section>
        </>
    );
};

