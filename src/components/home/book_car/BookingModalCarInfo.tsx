import React from 'react';

type BookingModalCarInfoPropsType = {
    pickTime: string
    dropTime: string
    carType: string
    imgUrl: string
    priceCar: number
}

export const BookingModalCarInfo = (props: BookingModalCarInfoPropsType) => {
    return (
        <div className="booking-modal__car-info">
            <div className="dates-div">
                <div className="booking-modal__car-info__dates">
                    <h5>Rent a car for a date</h5>
                    <span>
                        <div>
                            <h6>Pick-Up Date</h6>
                            <p>{props.pickTime}</p>
                        </div>
                    </span>
                </div>

                <div className="booking-modal__car-info__dates">
                    <span>
                        <div>
                            <h6>Drop-Off Date</h6>
                            <p>{props.dropTime}</p>
                        </div>
                    </span>
                </div>
            </div>

            <div className="booking-modal__car-info__model">
                <h5>
                    <span>Car -</span> {props.carType} <span>- {props.priceCar}$ per day</span>
                </h5>
                {props.imgUrl && <img src={props.imgUrl} alt="car_img"/>}
            </div>
        </div>
    );
};

