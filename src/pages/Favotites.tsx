import React from 'react';
import {Model} from "../components/Model";
import {HeroPages} from "../components/HeroPages";
import {useAppSelector} from "../hooks/redux";


export const Favorites = () => {
    const carModel = useAppSelector(state => state.carModels.items)

    return (
        <section className="hero-pages">
            <HeroPages name={'Favorites'}/>
            <div className="hero-pages__overlay"></div>
            <div className="container">
                <div className="models-div">
                    {carModel.map(el => {
                        return (
                            <Model model={el}/>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};
