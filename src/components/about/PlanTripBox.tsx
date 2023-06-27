import React from 'react';

type PlanTripBoxPropsType = {
    img: string
    text: string
    title: string
}

export const PlanTripBox = (props: PlanTripBoxPropsType) => {
    return (
        <div className="plan-container__boxes__box">
            <img src={props.img} alt="icon_img"/>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    );
};
