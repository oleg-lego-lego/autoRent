import React from 'react';

type AboutTextIconsPropsType = {
    text: string
    count: number
    img: string
}

export const AboutTextIcons = (props: AboutTextIconsPropsType) => {
    return (
        <div className="about-main__text__icons__box">
            <img src={props.img} alt="car-icon"/>
            <span>
                <h4>{props.count}</h4>
                <p>{props.text}</p>
            </span>
        </div>
    );
};
