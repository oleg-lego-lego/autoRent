import React from 'react';
import {Link} from "react-router-dom";

type HeroPagesProps = {
    name: string
}

export const HeroPages = (props: HeroPagesProps) => {
    const {name} = props

    return (
        <>
            <section className="hero-pages">
                <div className="hero-pages__overlay"></div>
                <div className="container">
                    <div className="hero-pages__text">
                        <h3>{name}</h3>
                        <p>
                            <Link to="/">Home</Link> / {name}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

