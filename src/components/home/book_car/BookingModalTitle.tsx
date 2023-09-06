import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {setModal} from "../../../app/reducer/bookCarInputValue-reducer";


export const BookingModalTitle = () => {
    const dispatch = useAppDispatch()
    const modal = useAppSelector(state => state.bookCarInputValue.modal)

    const setModalHandler = () => {
        dispatch(setModal(!modal))
    }

    return (
        <>
            <div className="booking-modal__title">
                <h2>Complete Reservation</h2>
                <button className="booking-modal__button" onClick={setModalHandler}>x</button>
            </div>
            <div className="booking-modal__message">
                <h4>
                    Upon completing this reservation enquiry, you will receive:
                </h4>
                <p>
                    Your rental voucher to produce on arrival at the rental desk and a
                    toll-free customer support number.
                </p>
            </div>
        </>
    );
};

