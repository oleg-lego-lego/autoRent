import React, {ChangeEvent, useState} from 'react';
import {ContactUs} from "./ContactUs";
import {ToContactUs} from "../ data/toContactUs";

export const Footer = () => {
    const [title, SetTitle] = useState('')

    const onclickSubmit = () => {
        SetTitle('')
    }

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        SetTitle(e.currentTarget.value)
    }

    return (
        <footer>
            <div className="container">
                <div className="footer__content">
                    <ul className="footer__contact-us">
                        <li>
                            <span>CAR Rental</span>
                        </li>
                        <li>
                            Whether you're looking for a compact car for a solo trip, a spacious SUV for a family
                            adventure, or a luxurious sedan for a special occasion, we have the perfect car to meet
                            your needs.
                        </li>
                        <ContactUs title={'phone: ' + ToContactUs.TELEPHONE} href={'tel:' + ToContactUs.TELEPHONE}/>
                        <ContactUs title={'email: ' + ToContactUs.EMAIL} href={'mailto:' + ToContactUs.EMAIL}/>
                    </ul>

                    <ul className="footer__company-us">
                        <li>Company</li>
                        <ContactUs title={'New York'} href={'tel:' + ToContactUs.TELEPHONE}/>
                        <ContactUs title={'Sidney'} href={'tel:' + ToContactUs.TELEPHONE}/>
                        <ContactUs title={'Moscow'} href={'tel:' + ToContactUs.TELEPHONE}/>
                    </ul>

                    <ul className="footer__company-us">
                        <li>Opening hours</li>
                        <li>Mon - Fri: 9:00 - 19:00</li>
                        <li>Sat: Closed</li>
                        <li>Sun: 9:00 - 18:00</li>
                    </ul>

                    <ul className="footer__company-us">
                        <li>Subscription</li>
                        <li>
                            <p>Subscribe to the latest news and updates?</p>
                        </li>
                        <li>
                            <input
                                value={title}
                                onChange={onChangeInput}
                                type="email"
                                placeholder="Enter Email Address"
                                id="uniqueId">
                            </input>
                        </li>
                        <li>
                            <button onClick={onclickSubmit} className="submit__email">Submit</button>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
