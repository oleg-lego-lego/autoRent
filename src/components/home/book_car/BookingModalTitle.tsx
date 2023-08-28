import React from 'react';

type BookingModalTitlePropsType = {
    setModal: (valueModal: boolean) => void
}

export const BookingModalTitle = (props: BookingModalTitlePropsType) => {
    const setModalHandler = () => {
        props.setModal(false)
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

