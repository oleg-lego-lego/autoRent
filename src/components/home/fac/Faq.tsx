import React, {useState} from 'react';
import {FaqBox} from "./FaqBox";

export const Faq = () => {
    const [activeQ, setActiveQ] = useState("q1");

    const openQ = (id: string) => {
        setActiveQ(activeQ === id ? '' : id);
    };

    const getClassAnswer = (id: string) => {
        return activeQ === id ? "active-answer" : "";
    };

    const getClassQuestion = (id: string) => {
        return activeQ === id ? "active-question" : "";
    };


    return (
        <>
            <section className="faq-section">
                <div className="container">
                    <div className="faq-content">
                        <div className="faq-content__title">
                            <h5>FAQ</h5>
                            <h2>Frequently Asked Questions</h2>
                            <p>
                                Frequently Asked Questions About the Car Rental Booking Process
                                on Our Website: Answers to Common Concerns and Inquiries.
                            </p>
                        </div>

                        <div className="all-questions">
                            <FaqBox
                                id={'q1'}
                                openQ={openQ}
                                getClassAnswer={getClassAnswer}
                                getClassQuestion={getClassQuestion}
                                question={'1. What is special about comparing rental car deals?'}
                                answer={'Comparing rental car deals is important as it helps find the\n' +
                                    '                                    best deal that fits your budget and requirements, ensuring you\n' +
                                    '                                    get the most value for your money. By comparing various\n' +
                                    '                                    options, you can find deals that offer lower prices,\n' +
                                    '                                    additional services, or better car models. You can find car\n' +
                                    '                                    rental deals by researching online and comparing prices from\n' +
                                    '                                    different rental companies.'}
                            />
                            <FaqBox
                                id={'q2'}
                                question={'2. How do I find the car rental deals?'}
                                answer={'You can find car rental deals by researching online and\n' +
                                    '                                    comparing prices from different rental companies. Websites\n' +
                                    '                                    such as Expedia, Kayak, and Travelocity allow you to compare\n' +
                                    '                                    prices and view available rental options. It is also\n' +
                                    '                                    recommended to sign up for email newsletters and follow rental\n' +
                                    '                                    car companies on social media to be informed of any special\n' +
                                    '                                    deals or promotions.'}
                                openQ={openQ}
                                getClassAnswer={getClassAnswer}
                                getClassQuestion={getClassQuestion}
                            />
                            <FaqBox
                                id={'q3'}
                                question={'3. How do I find such low rental car prices?'}
                                answer={'Book in advance: Booking your rental car ahead of time can\n' +
                                    '                                    often result in lower prices. Compare prices from multiple\n' +
                                    '                                    companies: Use websites like Kayak, Expedia, or Travelocity to\n' +
                                    '                                    compare prices from multiple rental car companies. Look for\n' +
                                    '                                    discount codes and coupons: Search for discount codes and\n' +
                                    '                                    coupons that you can use to lower the rental price. Renting\n' +
                                    '                                    from an off-airport location can sometimes result in lower\n' +
                                    '                                    prices.'}
                                openQ={openQ}
                                getClassAnswer={getClassAnswer}
                                getClassQuestion={getClassQuestion}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
