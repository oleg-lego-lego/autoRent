import React from 'react';
import arrow from '../../images/faq/angle-arrow-down_icon-icons.com_73683.png'

type FaqBoxPropsType = {
    id: string
    question: string
    answer: string
    openQ: (id: string) => void
    getClassQuestion: (id: string) => string
    getClassAnswer: (id: string) => string
}

export const FaqBox = (props: FaqBoxPropsType) => {
    return (
        <div className="faq-box">
            <div
                onClick={() => props.openQ(props.id)}
                className={`faq-box__question  ${props.getClassQuestion(props.id)}`}
            >
                <p>{props.question}</p>
                <img src={arrow} alt="стрелка"/>
            </div>
            <div className={`faq-box__answer ${props.getClassAnswer(props.id)}`}>
                {props.answer}
            </div>
        </div>
    );
};