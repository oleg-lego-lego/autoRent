import React from 'react';
import {TakeBoxType} from "./takeBoxList";

type TakeUsBoxPropsType = {
    takeBoxList: TakeBoxType
}

export const TakeUsBox = (props: TakeUsBoxPropsType) => {
    return (
        <div className="takeUs__box">
            <img src={props.takeBoxList.img} alt="car-img"/>
            <div className="takeUs__box__text">
                <h4>{props.takeBoxList.title}</h4>
                <p>{props.takeBoxList.description}</p>
            </div>
        </div>
    );
};
