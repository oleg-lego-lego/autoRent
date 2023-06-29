import React from 'react';
import {Model} from "../components/Model";
import audiA1 from "../images/cars-big/audi-box.png";
import {CarModelsType} from "./Models";
import {HeroPages} from "../components/HeroPages";

const carModels: CarModelsType[] = [
    {carBrand: 'Audi', model: 'A1', price: 45, motor: 'benzine', transmission: 'automatic', img: audiA1, liters: '1.9'},
]

export const Favorites = () => {
    return (
        <section className="hero-pages">
            <HeroPages name={'Favorites'}/>
            <div className="hero-pages__overlay"></div>
            <div className="container">
                <div className="models-div">
                    {carModels.map(el => {
                        return (
                            <Model model={el}/>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};
