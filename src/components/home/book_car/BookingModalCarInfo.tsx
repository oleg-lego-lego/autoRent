import React from 'react';
import {useAppSelector} from "../../../hooks/redux";


export const BookingModalCarInfo = () => {
    const carType = useAppSelector(state => state.bookCarInputValue.carType)
    const pickTime = useAppSelector(state => state.bookCarInputValue.pickTime)
    const dropTime = useAppSelector(state => state.bookCarInputValue.dropTime)

    const carImages = useAppSelector(state => state.bookCarMoreInfo.carImages)
    const priceCar = useAppSelector(state => state.bookCarMoreInfo.priceCar)

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
                    <span>Car -</span> {carType} <span>- {priceCar}$ per day</span>
                </h5>
                {carImages && <img src={carImages} alt="car_img"/>}
            </div>
        </div>
    );
};

