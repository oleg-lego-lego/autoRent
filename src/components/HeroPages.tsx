import React from 'react';
import {Link} from "react-router-dom";

type HeroPagesProps = {
    name: string
}

export const HeroPages = ({name}: HeroPagesProps) => {
    return (
        <section className="hero__pages">
            <div className="hero__overlay"/>
            <div className="container">
                <div className="hero__text">
                    <h3>{name}</h3>
                    <p>
                        <Link to="/">Home</Link> / {name}
                    </p>
                </div>
            </div>
        </section>
    );
};

