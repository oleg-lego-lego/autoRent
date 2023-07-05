import React, {useState} from 'react';
import {CarDataType} from "./CarData";
import {TableCar} from "./TableCar";

type CarBoxPropsType = {
    data: CarDataType[][]
    carID: number
}

export const CarBox = (props: CarBoxPropsType) => {
    const [carLoad, setCarLoad] = useState(true);
    return (
        <>
            {props.data[props.carID].map((car, id) => (
                <div key={id} className="box-cars">ff
                    <div className="pick-car">
                        {carLoad && <span className="loader"></span>}
                        <img
                            style={{display: carLoad ? "none" : "block"}}
                            src={car.img}
                            alt="car_img"
                            onLoad={() => setCarLoad(false)}
                        />
                    </div>
                    <div className="pick-description">
                        <div className="pick-description__price">
                            <span>${car.price}</span>/ rent per day
                        </div>
                        <div className="pick-description__table">
                            <TableCar description={'Model'} title={car.model}/>
                            <TableCar description={'Mark'} title={car.mark}/>
                            <TableCar description={'Year'} title={car.year}/>
                            <TableCar description={'Doors'} title={car.doors}/>
                            <TableCar description={'AC'} title={car.air}/>
                            <TableCar description={'Transmission'} title={car.transmission}/>
                            <TableCar description={'Fuel'} title={car.fuel}/>
                        </div>
                        <a className="cta-btn" href="src/components/home/CarBox#booking-section">
                            Reserve Now
                        </a>
                    </div>
                </div>
            ))}
        </>
    );
};