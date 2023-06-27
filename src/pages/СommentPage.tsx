import React from 'react';
import {HeroPages} from "../components/HeroPages";
import {Footer} from "../components/Footer";
import {CommentsBlog} from "../components/comment/CommentBlog";
import Banner from "../components/Banner";

export const CommentPage = () => {
    return (
        <>
            <section className="testimonial-page">
                <HeroPages name={'Comment'}/>
                <CommentsBlog/>
                <Banner/>
                <Footer/>
            </section>
        </>
    );
};

