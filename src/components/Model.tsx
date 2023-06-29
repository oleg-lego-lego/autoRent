import React from 'react';
import {Link} from "react-router-dom";
import {CarModelsType} from "../pages/Models";

export type ModelPropsType = {
    model: CarModelsType
    carModelsSetState?: (id: string, favorites: boolean) => void
}

export const Model = (props: ModelPropsType) => {
    const favoritesClick = (id: string, favorites: boolean) => {
        if (props.carModelsSetState) {
            props.carModelsSetState(id, !favorites)
        }
    }

    return (
        <div className="models-div__box">
            <div className="models-div__box__img">
                <img src={props.model.img} alt="car_img"/>
                <div className="models-div__box__descr">
                    <div className="models-div__box__descr__name-price">
                        <div className="models-div__box__descr__name-price__name">
                            <p>{props.model.carBrand}</p>
                        </div>
                        <div className="models-div__box__descr__name-price__price">
                            <h4>${props.model.price}</h4>
                            <button onClick={() => favoritesClick(props.model.id, props.model.favorites)}>
                                {props.model.favorites ? 'false' : 'true'}
                            </button>
                            <p>per day</p>
                        </div>
                    </div>
                    <div className="models-div__box__descr__name-price__details">
                        <span>{props.model.model}</span>
                        <span style={{textAlign: "right"}}>{props.model.liters}L</span>
                        <span>{props.model.transmission}</span>
                        <span style={{textAlign: "right"}}>{props.model.motor}</span>
                    </div>
                    <div className="models-div__box__descr__name-price__btn">
                        <Link onClick={() => window.scrollTo(0, 0)} to="/">
                            Book Ride
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
