import React from 'react';
import {HeroPages} from "../components/heroPages/HeroPages";
import AboutMain from "../images/about/about-main.png"
import car_types from "../images/about/car-types.png"
import rental_outlets from "../images/about/rental-outlets.png"
import repair_shop from "../images/about/repair-shop.png"
import {PlanTrip} from "../components/about/PlanTrip";
import {AboutTextIcons} from "../components/about/AboutTextIcons";

export const About = () => {
    return (
        <section>
            <HeroPages name={'About'}/>
            <div className="container">
                <div className="about__main">
                    <img className="about__img" src={AboutMain} alt="car-renting"/>
                    <div className="about__text">
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
                        <div className="about__icons">
                            <AboutTextIcons text={'Car Types'} img={car_types} count={20}/>
                            <AboutTextIcons text={'Rental Outlets'} img={rental_outlets} count={3}/>
                            <AboutTextIcons text={'Repair Shop'} img={repair_shop} count={2}/>
                        </div>
                    </div>
                </div>
                <PlanTrip/>
            </div>
        </section>
    );
};

