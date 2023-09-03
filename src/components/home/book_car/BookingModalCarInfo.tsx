import React from 'react';
import {useAppSelector} from "../../../hooks/redux";

type BookingModalCarInfoPropsType = {
    imgUrl: string
    priceCar: number
}

export const BookingModalCarInfo = (props: BookingModalCarInfoPropsType) => {
    const carType = useAppSelector(state => state.bookCar.carType)
    const pickTime = useAppSelector(state => state.bookCar.pickTime)
    const dropTime = useAppSelector(state => state.bookCar.dropTime)

    return (
        <div className="booking-modal__car-info">
            <div className="dates-div">
                <div className="booking-modal__car-info__dates">
                    <h5>Rent a car for a date</h5>
                    <span>
                        <div>
                            <h6>Pick-Up Date</h6>
                            <p>{pickTime}</p>
                        </div>
                    </span>
                </div>

                <div className="booking-modal__car-info__dates">
                    <span>
                        <div>
                            <h6>Drop-Off Date</h6>
                            <p>{dropTime}</p>
                        </div>
                    </span>
                </div>
            </div>

            <div className="booking-modal__car-info__model">
                <h5>
                    <span>Car -</span> {carType} <span>- {props.priceCar}$ per day</span>
                </h5>
                {props.imgUrl && <img src={props.imgUrl} alt="car_img"/>}
            </div>
        </div>
    );
};

