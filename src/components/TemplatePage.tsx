import React from 'react';
import {NavbarLink} from "./navbar/NavbarLink";
import {PATH} from "../App";

type TemplatePagePropsType = {
    header: string
    description: string
    linkTitle: string
    path: PATH
    linkClassName: string
    img: string
    imgDescription: string
    imgClassName: string
}

export const TemplatePage = (props: TemplatePagePropsType) => {
    return (
        <div className="container">
            <div className="favorites-section">
                <div className="favorites--empty">
                    <h2>{props.header}
                        <span> 😕</span>
                    </h2>
                    <p>{props.description}
                        <NavbarLink title={props.linkTitle} to={props.path} className={props.linkClassName}/>
                    </p>
                    <img src={props.img} alt={props.imgDescription} className={props.imgClassName}/>
                </div>
            </div>
        </div>
    );
};
