import React, {useState} from 'react';
import {TableCar} from "../garage/TableCar";
import {CarModelsType} from "../../app/reducer/carModels/carModels";
import favoritesTrue from "../../images/favorites/favoritesTrue.svg";
import favoritesFalse from "../../images/favorites/favoritesFalse.svg";
import {useAppDispatch, useAppSelector} from "../../app/hooks/redux";
import {fetchPutFavorites} from "../../app/reducer/carModels/carModels-reducer";
import {Link} from "react-router-dom";
import {PATH} from "../../app/PATH/PATH";
import {bookCarValue} from "../../app/reducer/bookCar/bookCar-reducer";

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

    const reserveNowHandler = (modelCar: string) => {
        window.scrollTo(0, 600)
        dispatch(bookCarValue(modelCar))
    }

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
                <Link className="cta-btn" onClick={() => reserveNowHandler(props.data.name)} to={PATH.HOME}>
                    Reserve Now
                </Link>
            </div>
        </div>
    );
};