import React from 'react';
import findCar from "../../images/plan/icon1.png";
import Contact from "../../images/plan/icon2.png";
import Drive from "../../images/plan/icon3.png";
import {PlanTripBox} from "./PlanTripBox";

export const PlanTrip = () => {
    const findCarText = 'We offer a wide range of vehicles to suit all your driving needs. We have the perfect car to meet your requirements.'
    const contactText = 'Our operators are here to help with your questions and concerns. We pride ourselves on being knowledgeable and friendly, ready to assist you whenever you need.'
    const driveText = 'Our cars are serviced and ready for you to take on your journey.'

    return (
        <>
            <section className="plan-section">
                <div className="container">
                    <div className="plan-container">
                        <div className="plan-container__title">
                            <h3>Unlock your journey today.</h3>
                            <h2>Seamless car rental, just a click away!</h2>
                        </div>

                        <div className="plan-container__boxes">
                            <PlanTripBox title={'Find car'} text={findCarText} img={findCar}/>
                            <PlanTripBox title={'Contact Operator'} text={contactText} img={Contact}/>
                            <PlanTripBox title={'Let\'s Go'} text={driveText} img={Drive}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};