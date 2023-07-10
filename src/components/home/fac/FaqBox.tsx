import React from 'react';
import arrow from '../../../images/faq/angle-arrow-down_icon-icons.com_73683.png'
import {FacListType} from "./facList";

type FaqBoxPropsType = {
    data: FacListType
    openQ: (id: string) => void
    getClassQuestion: (id: string) => string
    getClassAnswer: (id: string) => string
}

export const FaqBox = (props: FaqBoxPropsType) => {
    return (
        <div className="faq-box">
            <div
                onClick={() => props.openQ(props.data.id)}
                className={`faq-box__question  ${props.getClassQuestion(props.data.id)}`}
            >
                <p>{props.data.question}</p>
                <img src={arrow} alt="стрелка"/>
            </div>
            <div className={`faq-box__answer ${props.getClassAnswer(props.data.id)}`}>
                {props.data.answer}
            </div>
        </div>
    );
};