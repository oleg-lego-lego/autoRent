import React, {ChangeEvent, useEffect, useState} from 'react';
import CarAudi from "../../../images/cars-big/audia1.jpg";
import CarGolf from "../../../images/cars-big/golf6.jpg";
import CarToyota from "../../../images/cars-big/toyota-corolla.jpg";
import CarBmw from "../../../images/cars-big/bmw320.jpg";
import CarMercedes from "../../../images/cars-big/benz.jpg";
import CarPassat from "../../../images/cars-big/passatcc.jpg";
import {BookingModal} from "./BookingModal";

export const BookCar = () => {
    const [modal, setModal] = useState(false); //  class - active-modal

    // booking car
    const [carType, setCarType] = useState('');
    const [pickTime, setPickTime] = useState('');
    const [dropTime, setDropTime] = useState('');
    const [carImg, setCarImg] = useState('');
    const [error, setError] = useState('')

    // open modal when all inputs are fulfilled
    const openModal = (e: React.MouseEvent) => {
        e.preventDefault();
        if (pickTime === "" || dropTime === "" || carType === "") {
            setError('error: Not all fields are filled!')
        } else {
            setModal(!modal);
            const modalDiv = document.querySelector(".booking-modal");
            modalDiv && modalDiv.scroll(0, 0);
        }
    };

    // disable page scroll when modal is displayed
    useEffect(() => {
        if (modal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [modal]);

    // confirm modal booking
    const confirmBooking = (e: React.MouseEvent) => {
        // e.preventDefault();
        // setModal(!modal);
        // const doneMsg = document.querySelector(".booking-done");
        // doneMsg.style.display = "flex";
    };

    // taking value of booking inputs
    const handleCar = (e: ChangeEvent<HTMLSelectElement>) => {
        setCarType(e.target.value);
        setCarImg(e.target.value);
        setError('')
    };

    const handlePickTime = (e: ChangeEvent<HTMLInputElement>) => {
        if (!dropTime || dropTime >= e.target.value || dropTime === e.target.value) {
            setPickTime(e.target.value)
            setError('')
        } else {
            setError('error: wrong rental date')
            setPickTime('')
        }
    };

    const handleDropTime = (e: ChangeEvent<HTMLInputElement>) => {
        if (pickTime <= e.target.value || pickTime === e.target.value) {
            setDropTime(e.target.value);
            setError('')
        } else {
            setError('error: wrong rental date')
            setDropTime('')
        }
    };

    // based on value name show car img
    let imgUrl;
    switch (carImg) {
        case "Audi A1 S-Line":
            imgUrl = CarAudi;
            break;
        case "VW Golf 6":
            imgUrl = CarGolf;
            break;
        case "Toyota Corolla":
            imgUrl = CarToyota;
            break;
        case "BMW 320":
            imgUrl = CarBmw;
            break;
        case "Mercedes GLK":
            imgUrl = CarMercedes;
            break;
        case "VW Passat CC":
            imgUrl = CarPassat;
            break;
        default:
            imgUrl = "";
    }

    // hide message
    const hideMessage = () => {
        const doneMsg = document.querySelector(".booking-done");
        // doneMsg.style.display = "none";
    };

    const inputError = (inputError: string) => {
        return  error && !inputError ? {borderColor: 'red'} : {}
    }

    return (
        <>
            <section id="booking-section" className="book-section">
                {/* overlay */}
                <div
                    onClick={openModal}
                    className={`modal-overlay ${modal ? "active-modal" : ""}`}
                />
                <div className="container">
                    <div className="book-content">
                        <div className="book-content__box">
                            <h2>
                                Book a car
                            </h2>
                            <div style={!error ? {display: 'none'} : {display: ''}} className={'error-message'}>
                                {error}
                            </div>

                            {/*<p className="error-message">*/}
                            {/*    All fields required! <i className="fa-solid fa-xmark"></i>*/}
                            {/*</p>*/}

                            <p className="booking-done">
                                Check your email to confirm an order.{" "}
                                <i onClick={hideMessage} className="fa-solid fa-xmark"></i>
                            </p>


                            <form className="box-form">
                                <div className="box-form__car-type">
                                    <label>
                                        Select Your Car Type
                                        <b>*</b>
                                    </label>
                                    <select value={carType} onChange={handleCar} style={inputError(carType)}>
                                        <option>Select your car type</option>
                                        <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                                        <option value="VW Golf 6">VW Golf 6</option>
                                        <option value="Toyota Corolla">Toyota Corolla</option>
                                        <option value="BMW 320">BMW 320</option>
                                        <option value="Mercedes GLK">Mercedes-Benz GLK</option>
                                        <option value="VW Passat CC">VW Passat CC</option>
                                    </select>
                                </div>

                                <div className="box-form__car-time">
                                    <label htmlFor="pickTime">
                                        Pick-up
                                        <b>*</b>
                                    </label>
                                    <input
                                        id="pickTime"
                                        value={pickTime}
                                        onChange={handlePickTime}
                                        type="date"
                                        style={inputError(pickTime)}
                                    />
                                </div>

                                <div className="box-form__car-time">
                                    <label htmlFor="dropTime">
                                        Drop-of
                                        <b>*</b>
                                    </label>
                                    <input
                                        id="dropTime"
                                        value={dropTime}
                                        onChange={handleDropTime}
                                        type="date"
                                        style={inputError(dropTime)}
                                    />
                                </div>

                                <button onClick={openModal}
                                    // type="submit"
                                        disabled={error !== ''}
                                >
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* modal ------------------------------------ */}
            <BookingModal
                modal={modal}
                openModal={openModal}
                carType={carType}
                pickTime={pickTime}
                dropTime={dropTime}
                imgUrl={imgUrl}
                carImg={carImg}
            />
        </>
    );
};
