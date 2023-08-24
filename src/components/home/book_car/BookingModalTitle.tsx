import React from 'react';

export const BookingModalTitle = () => {
    return (
        <>
            <div className="booking-modal__title">
                <h2>Complete Reservation</h2>
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

