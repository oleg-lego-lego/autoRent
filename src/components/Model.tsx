import React from 'react';
import {Link} from "react-router-dom";
import {carModelsFavorites} from "../app/reducer/carModels-reducer";
import {useAppDispatch} from "../hooks/redux";
import {CarModelsType} from "../app/reducer/carModels";
import favoritesTrue from "../images/favoritesTrue.svg"
import favoritesFalse from "../images/favoritesFalse.svg"


export type ModelPropsType = {
    model: CarModelsType
}

export const Model = (props: ModelPropsType) => {
    const dispatch = useAppDispatch()
    const favoritesClick = (id: string, favorites: boolean) => {
        dispatch(carModelsFavorites({id, favorites}))
    }

    const titleFavorites = props.model.favorites ? 'remove favorites' : 'add favorites';

    return (
        <div className="models-div__box">
            <div className="models-div__box__img">
                <img src={props.model.img} alt="car_img"/>
                <div className="models-div__box__descr">
                    <div className="models-div__box__descr__name-price">
                        <div className="models-div__box__descr__name-price__name">
                            <p>{props.model.name}</p>
                        </div>
                        <div
                            onClick={() => favoritesClick(props.model.id, props.model.favorites)}
                            className={"buttonFavorites"}
                        >
                            {props.model.favorites
                                ? <img src={favoritesTrue} title={titleFavorites} alt="favoritesTrue"/>
                                : <img src={favoritesFalse} title={titleFavorites} alt="favoritesFalse"/>
                            }
                        </div>
                        <div className="models-div__box__descr__name-price__price">
                            <h4>${props.model.price}</h4>
                            <p>per day</p>
                        </div>
                    </div>
                    <div className="models-div__box__descr__name-price__details">
                        <span>{props.model.model}</span>
                        <span style={{textAlign: "right"}}>{props.model.fuel}</span>
                        <span>{props.model.transmission}</span>
                        <span style={{textAlign: "right"}}>{props.model.year}</span>
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
