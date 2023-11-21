import React from 'react';
import {Link} from "react-router-dom";
import {fetchPutFavorites} from "../../app/reducer/carModels/carModels-reducer";
import {useAppDispatch, useAppSelector} from "../../app/hooks/redux";
import {CarModelsType} from "../../app/reducer/carModels/carModels";
import favoritesTrue from "../../images/favorites/favoritesTrue.svg"
import favoritesFalse from "../../images/favorites/favoritesFalse.svg"
import {PATH} from "../../app/PATH/PATH";

export type ModelPropsType = {
    model: CarModelsType
}

export const Model = (props: ModelPropsType) => {
    const dispatch = useAppDispatch()

    const isDisabled = useAppSelector(state => state.isLoading.disabled)

    const favoritesClick = (id: string, favorites: boolean) => {
        dispatch(fetchPutFavorites({id, favorites}))
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
                        <button
                            className="buttonFavorites__model"
                            disabled={isDisabled}
                            onClick={() => favoritesClick(props.model.id, !props.model.favorites)}
                        >
                            {props.model.favorites
                                ? <img src={favoritesTrue} title={titleFavorites} alt="favoritesTrue"/>
                                : <img src={favoritesFalse} title={titleFavorites} alt="favoritesFalse"/>
                            }
                        </button>
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
