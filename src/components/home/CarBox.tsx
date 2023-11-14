import React, {useState} from 'react';
import {TableCar} from "./TableCar";
import {CarModelsType} from "../../app/reducer/carModels";
import favoritesTrue from "../../images/favoritesTrue.svg";
import favoritesFalse from "../../images/favoritesFalse.svg";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchPutFavorites} from "../../app/reducer/carModels-reducer";
import {Link} from "react-router-dom";
import {PATH} from "../../PATH/PATH";

type CarBoxPropsType = {
    data: CarModelsType
}

export const CarBox = (props: CarBoxPropsType) => {
    const [carLoad, setCarLoad] = useState(true);

    const isDisabled = useAppSelector(state => state.isLoading.disabled)

    const dispatch = useAppDispatch()

    const favoritesClick = (id: string, favorites: boolean) => {
        dispatch(fetchPutFavorites({id, favorites}))
    }

    const titleFavorites = props.data.favorites ? 'remove favorites' : 'add favorites';

    return (
        <div className="box-cars">
            <div className="pick-car">
                {carLoad && <span className="loader"></span>}
                <button
                    onClick={() => favoritesClick(props.data.id, !props.data.favorites)}
                    className="buttonFavorites"
                    disabled={isDisabled}
                >
                    {props.data.favorites
                        ? <img
                            src={favoritesTrue}
                            title={titleFavorites}
                            alt="favoritesTrue"/>
                        : <img
                            src={favoritesFalse}
                            title={titleFavorites}
                            alt="favoritesFalse"/>
                    }
                </button>
                <img
                    style={{display: carLoad ? "none" : "block"}}
                    src={props.data.img}
                    alt="car_img"
                    onLoad={() => setCarLoad(false)}
                />
            </div>
            <div className="pick-description">
                <div className="pick-description__price">
                    <span>${props.data.price}</span>/ rent per day
                </div>
                <div className="pick-description__table">
                    <TableCar description={'Model'} title={props.data.model}/>
                    <TableCar description={'Mark'} title={props.data.mark}/>
                    <TableCar description={'Year'} title={props.data.year}/>
                    <TableCar description={'Doors'} title={props.data.doors}/>
                    <TableCar description={'Transmission'} title={props.data.transmission}/>
                    <TableCar description={'Fuel'} title={props.data.fuel}/>
                </div>
                <Link className="cta-btn" onClick={() => window.scrollTo(0, 600)} to={PATH.HOME}>
                    Reserve Now
                </Link>
            </div>
        </div>
    );
};