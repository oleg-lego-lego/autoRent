import React from 'react';
import {HeroPages} from "../components/heroPages/HeroPages";
import {ToContactUs} from "../ data/toContactUs";
import {ContactUs} from "../components/home/ContactUs";

export const Contact = () => {
    return (
        <>
            <HeroPages name={'Contact'}/>
            <div className="container">
                <div className="contact__information">
                    <div className="contact__text">
                        <h2>Would you like more information?</h2>
                        <p>
                            If you'd like to stay updated with more information about us, feel free to get in touch, and
                            we'll keep you informed with the latest updates about our vehicles and services. Your
                            satisfaction is our priority, and we're here to ensure you have all the details you need for
                            a great experience. Don't hesitate to reach out, and we'll be happy to assist you.
                        </p>
                        <ContactUs title={ToContactUs.TELEPHONE} href={'tel:' + ToContactUs.TELEPHONE}/>
                        <ContactUs title={'email: ' + ToContactUs.EMAIL} href={'mailto:' + ToContactUs.EMAIL}/>
                        <ContactUs title={'Moscow'} href={'tel:' + ToContactUs.TELEPHONE}/>
                    </div>
                    <div className="contact__form">
                        <form>
                            <label htmlFor="inputName">
                                Full Name <b>*</b>
                            </label>
                            <input type="text" placeholder='E.g: "Joe Smith"' id='inputName'/>

                            <label htmlFor="inputEmail">
                                Email <b>*</b>
                            </label>
                            <input type="email" placeholder="youremail@example.com" id="inputEmail"/>

                            <label htmlFor="inputAbout">
                                Tell us about it <b>*</b>
                            </label>
                            <textarea placeholder="Write Here..." id='inputAbout'/>
                            <button type="submit">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
