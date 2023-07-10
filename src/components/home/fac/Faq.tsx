import React, {useState} from 'react';
import {FaqBox} from "./FaqBox";
import {facList} from "./facList";

export const Faq = () => {
    const [activeQ, setActiveQ] = useState(facList[0].id)

    const openQ = (id: string) => setActiveQ(activeQ === id ? '' : id);
    const getClassAnswer = (id: string) => activeQ === id ? "active-answer" : "";
    const getClassQuestion = (id: string) => activeQ === id ? "active-question" : "";

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
                            {facList.map(el => {
                                return (
                                    <FaqBox
                                        data={el}
                                        openQ={openQ}
                                        getClassAnswer={getClassAnswer}
                                        getClassQuestion={getClassQuestion}
                                        key={el.id}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
