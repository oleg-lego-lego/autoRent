import React from 'react';
import {HeroPages} from "../../components/HeroPages";
import {Footer} from "../../components/Footer";
import audiA1 from "../../images/cars-big/audi-box.png"
import Golf6 from "../../images/cars-big/golf6-box.png";
import Camry from "../../images/cars-big/toyota-box.png";
import BMW320 from "../../images/cars-big/bmw-box.png";
import MercedesGLK from "../../images/cars-big/benz-box.png";
import Passat from "../../images/cars-big/passat-box.png";
import {Model} from "../../components/Model";

export type CarModelsType = {
    carBrand: string
    model: string
    price: number
    transmission: string
    motor: string
    img: string
}
const carModels: CarModelsType[] = [
    {carBrand: 'Audi', model: 'A1', price: 45, motor: 'benzine', transmission: 'automatic', img: audiA1},
    {carBrand: 'Volkswagen', model: 'Golf 6', price: 37, motor: 'diesel', transmission: 'manual', img: Golf6},
    {carBrand: 'Toyota', model: 'Camry', price: 30, motor: 'benzine', transmission: 'automatic', img: Camry},
    {carBrand: 'BMW', model: 'M320', price: 35, motor: 'benzine', transmission: 'manual', img: BMW320},
    {carBrand: 'Mercedes', model: 'GLK', price: 50, motor: 'diesel', transmission: 'automatic', img: MercedesGLK},
    {carBrand: 'Volkswagen', model: 'Passat', price: 40, motor: 'benzine', transmission: 'automatic', img: Passat},
]

export const Models = () => {
    return (
        <>
            <section className="models-section">
                <HeroPages name="Vehicle Models"/>
                <div className="container">
                    <div className="models-div">
                        {carModels.map(el => {
                            return (
                                <Model model={el}/>
                            )
                        })}
                    </div>
                </div>
                <div className="book-banner">
                    <div className="book-banner__overlay"></div>
                    <div className="container">
                        <div className="text-content">
                            <h2>Book a car by getting in touch with us</h2>
                            <span>
                                <i className="fa-solid fa-phone"></i>
                                <h3>(123) 456-7869</h3>
                            </span>
                        </div>
                    </div>
                </div>
                <Footer/>
            </section>
        </>
    );
};
