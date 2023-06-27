import React from 'react';
import {HeroPages} from "../components/HeroPages";
import AboutMain from "../images/about/about-main.png"
import Box1 from "../images/about/icon1.png"
import Box2 from "../images/about/icon2.png"
import Box3 from "../images/about/icon3.png"
import {PlanTrip} from "../components/PlanTrip";
import {Footer} from "../components/Footer";
import {AboutTextIcons} from "../components/about/AboutTextIcons";

export const About = () => {
    return (
        <>
            <section className="about-page">
                <HeroPages name="About"/>
                <div className="container">
                    <div className="about-main">
                        <img className="about-main__img" src={AboutMain} alt="car-renting"/>
                        <div className="about-main__text">
                            <h3>About Us</h3>
                            <h2>
                                Taking our car, you will see new landscapes, discover unknown destinations...
                            </h2>
                            <p>
                                You start the engine, and your adventure begins. Feeling excitement and anticipation,
                                you hit the open road. The wind rushes through your hair as each mile brings new
                                landscapes and unknown destinations. You relish in the freedom and the thrill of the
                                journey ahead, a world of possibilities unfolding before you.
                            </p>
                            <div className="about-main__text__icons">
                                <AboutTextIcons text={'Car Types'} img={Box1} count={20}/>
                                <AboutTextIcons text={'Rental Outlets'} img={Box2} count={3}/>
                                <AboutTextIcons text={'Repair Shop'} img={Box3} count={2}/>
                            </div>
                        </div>
                    </div>
                    <PlanTrip/>
                </div>
            </section>
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
        </>
    );
};

