import React from 'react';
import MainImg from "../../images/chooseUs/cars.png";
import {TakeUsBox} from "./TakeUsBox";
import {takeBox} from "./takeBoxList";
import {Link} from "react-router-dom";
import {PATH} from "../../App";


export const TakeUs = () => {
    const scrollToTop = () => {
        window.scrollTo({top: (0), behavior: "smooth"})
    }

    return (
        <section id="takeUs-section" className="takeUs__section">
            <div className="container">
                <div className="takeUs__container">
                    <img className="takeUs__img" src={MainImg} alt="car_img"/>
                    <div className="text-container">
                        <div className="text-container__left">
                            <h4>Why Choose Us</h4>
                            <h2>Best valued deals you will ever find</h2>
                            <p>
                                Discover the best deals you'll ever find with our unbeatable
                                offers. We're dedicated to providing you with the best value
                                for your money, so you can enjoy top-quality services and
                                products without breaking the bank. Our deals are designed to
                                give you the ultimate renting experience, so don't miss out on
                                your chance to save big.
                            </p>
                            <Link to={PATH.MODELS} onClick={scrollToTop}>
                                Find Details
                            </Link>
                        </div>
                        <div className="text-container__right">
                            {takeBox.map(el => {
                                return (
                                    <TakeUsBox takeBoxList={el} key={el.id}/>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

