import React, {useState} from 'react';
import {TableCar} from "./TableCar";
import {CarModelsType} from "../../app/reducer/carModels";

type CarBoxPropsType = {
    data: CarModelsType
    carID: number
}

export const CarBox = (props: CarBoxPropsType) => {
    const [carLoad, setCarLoad] = useState(true);

    return (
        <>
            <div className="box-cars">
                <div className="pick-car">
                    {carLoad && <span className="loader"></span>}
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
                    <a className="cta-btn" href="src/components/home/CarBox#booking-section">
                        Reserve Now
                    </a>
                </div>
            </div>
        </>
    );
};