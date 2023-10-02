import React from 'react';
import {Link} from "react-router-dom";
import {carModelsFavorites} from "../app/reducer/carModels-reducer";
import {useAppDispatch} from "../hooks/redux";
import {CarModelsType} from "../app/reducer/carModels";
import favoritesTrue from "../images/favoritesTrue.svg"
import favoritesFalse from "../images/favoritesFalse.svg"
import {PATH} from "../App";
import {carsApi} from "../api/cars-api";

export type ModelPropsType = {
    model: CarModelsType
}

export const Model = (props: ModelPropsType) => {
    const dispatch = useAppDispatch()

    const favoritesClick = (id: string, favorites: boolean) => {
        carsApi.getFavorites(id, favorites)
            .then(res => {
                dispatch(carModelsFavorites(res.data))
            })
    }

    const titleFavorites = props.model.favorites ? 'off favorites' : 'add favorites';

    return (
        <div className="models__box">
            <div className="models__img">
                <img src={props.model.img} alt="car_img"/>
                <div className="models__description">
                    <div className="models__name-price">
                        <div className="models__name">
                            <p>{props.model.name}</p>
                        </div>
                        <div
                            className={"buttonFavorites"}
                            onClick={() => favoritesClick(props.model.id, !props.model.favorites)}
                        >
                            {props.model.favorites
                                ? <img src={favoritesTrue} title={titleFavorites} alt="favoritesTrue"/>
                                : <img src={favoritesFalse} title={titleFavorites} alt="favoritesFalse"/>
                            }
                        </div>
                        <div className="models__price">
                            <h4>${props.model.price}</h4>
                            <p>per day</p>
                        </div>
                    </div>
                    <div className="models__details">
                        <span>{props.model.model}</span>
                        <span style={{textAlign: "right"}}>{props.model.fuel}</span>
                        <span>{props.model.transmission}</span>
                        <span style={{textAlign: "right"}}>{props.model.year}</span>
                    </div>
                    <div className="models__btn">
                        <Link onClick={() => window.scrollTo(0, 600)} to={PATH.HOME}>
                            Book Ride
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
