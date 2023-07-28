import React from 'react';
import {HeroPages} from "../components/HeroPages";
import {ToContactUs} from "../ data/toContactUs";
import {ContactUs} from "../components/ContactUs";

export const Contact = () => {
    return (
        <section>
            <HeroPages name={'Contact'}/>
            <div className="container">
                <div className="contact__information">
                    <div className="contact__text">
                        <h2>Need additional information?</h2>
                        <p>
                            A multifaceted professional skilled in multiple fields of
                            research, development as well as a learning specialist. Over 15
                            years of experience.
                        </p>
                        <ContactUs title={ToContactUs.TELEPHONE} href={'tel:' + ToContactUs.TELEPHONE}/>
                        <ContactUs title={'email: ' + ToContactUs.EMAIL} href={'mailto:' + ToContactUs.EMAIL}/>
                        <ContactUs title={'Moscow'} href={'tel:' + ToContactUs.TELEPHONE}/>
                    </div>
                    <div className="contact__form">
                        <form>
                            <label>
                                Full Name <b>*</b>
                            </label>
                            <input type="text" placeholder='E.g: "Joe Smith"'/>

                            <label>
                                Email <b>*</b>
                            </label>
                            <input type="email" placeholder="youremail@example.com"/>

                            <label>
                                Tell us about it <b>*</b>
                            </label>
                            <textarea placeholder="Write Here..."/>
                            <button type="submit">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
