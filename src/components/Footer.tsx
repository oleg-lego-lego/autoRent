import React, {ChangeEvent, useState} from 'react';
import {ContactUs} from "./ContactUs";

export const Footer = () => {
    const [title, SetTitle] = useState('')

    const onclickSubmit = () => {
        SetTitle('')
    }

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        SetTitle(e.currentTarget.value)
    }

    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-content">
                        <ul className="footer-content__1">
                            <li>
                                <span>CAR Rental</span>
                            </li>
                            <li>
                                Whether you're looking for a compact car for a solo trip, a spacious SUV for a family
                                adventure, or a luxurious sedan for a special occasion, we have the perfect car to meet
                                your needs.
                            </li>
                            <ContactUs title={'phone: (44) 444-44-44'} href={'tel:12345678'}/>
                            <ContactUs title={'email: rentacarhub@gmail.com'} href={'mailto:rentacarhub@gmail.com'}/>
                        </ul>

                        <ul className="footer-content__2">
                            <li>Company</li>
                            <ContactUs title={'New York'} href={'tel:12345678'}/>
                            <ContactUs title={'Sidney'} href={'tel:12345678'}/>
                            <ContactUs title={'Moscow'} href={'tel:12345678'}/>
                        </ul>

                        <ul className="footer-content__2">
                            <li>Opening hours</li>
                            <li>Mon - Fri: 9:00 - 19:00</li>
                            <li>Sat: Closed</li>
                            <li>Sun: 9:00 - 18:00</li>
                        </ul>

                        <ul className="footer-content__2">
                            <li>Subscription</li>
                            <li>
                                <p>Subscribe to the latest news and updates?</p>
                            </li>
                            <li>
                                <input
                                    value={title}
                                    onChange={onChangeInput}
                                    type="email"
                                    placeholder="Enter Email Address">
                                </input>
                            </li>
                            <li>
                                <button onClick={onclickSubmit} className="submit-email">Submit</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};
