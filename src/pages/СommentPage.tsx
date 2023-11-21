import React from 'react';
import {HeroPages} from "../components/heroPages/HeroPages";
import {CommentsBlog} from "../components/comment/CommentBlog";

export const CommentPage = () => {
    return (
        <section>
            <HeroPages name={'Comment'}/>
            <CommentsBlog/>
        </section>
    );
};

