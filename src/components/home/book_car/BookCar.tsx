import React, {ChangeEvent, useEffect, useState} from 'react';
import CarAudi from "../../../images/cars-big/audia1.jpg";
import CarGolf from "../../../images/cars-big/golf6.jpg";
import CarToyota from "../../../images/cars-big/toyota-corolla.jpg";
import CarBmw from "../../../images/cars-big/bmw320.jpg";
import CarMercedes from "../../../images/cars-big/benz.jpg";
import CarPassat from "../../../images/cars-big/passatcc.jpg";
import {BookingModal} from "./BookingModal";
import {BoxFormTimeInput} from "./BoxFormTimeInput";
import {BookShowMessage} from "./BookShowMessage";

export enum MODELS_CAR {
    AUDI_A1 = 'Audi A1 S-Line',
    VOLKSWAGEN_GOLF = 'VW Golf 6',
    TOYOTA_COROLLA = 'Toyota Corolla',
    BMW_320 = 'BMW 320',
    MERCEDES_GLK = 'Mercedes GLK',
    VOLKSWAGEN_PASSAT_CC = 'VW Passat CC'
}

interface CarImages {
    [key: string]: string;
}

export const BookCar = () => {
    const [modal, setModal] = useState(false); //  class - active-modal

    const [carType, setCarType] = useState('');
    const [pickTime, setPickTime] = useState('');
    const [dropTime, setDropTime] = useState('');
    const [carImg, setCarImg] = useState('');
    const [error, setError] = useState('')

    const [showDoneMessage, setShowDoneMessage] = useState('');

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

    useEffect(() => {
        if (modal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [modal]);

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

    const carImages: CarImages = {
        [MODELS_CAR.AUDI_A1]: CarAudi,
        [MODELS_CAR.VOLKSWAGEN_GOLF]: CarGolf,
        [MODELS_CAR.TOYOTA_COROLLA]: CarToyota,
        [MODELS_CAR.BMW_320]: CarBmw,
        [MODELS_CAR.MERCEDES_GLK]: CarMercedes,
        [MODELS_CAR.VOLKSWAGEN_PASSAT_CC]: CarPassat
    };

    const imgUrl: string = carImages[carImg];

    const inputError = (inputError: string) => {
        return error && !inputError ? {borderColor: 'red'} : {}
    }

    useEffect(() => {
        setTimeout(() => {
            setShowDoneMessage('');
        }, 8000);
    }, [showDoneMessage]);

    return (
        <>
            <section id="booking-section" className="book-section">
                <div className={`modal-overlay ${modal ? "active-modal" : ""}`}/>
                <div className="container">
                    <div className="book-content">
                        <div className="book-content__box">
                            <h2>
                                Book a car
                            </h2>
                            <BookShowMessage message={error} className={'error-message'}/>
                            <BookShowMessage message={showDoneMessage} className={'done-message'}/>

                            <form className="box-form">
                                <div className="box-form__car-type">
                                    <label>
                                        Select Your Car Type <b>*</b>
                                    </label>
                                    <select value={carType} onChange={handleCar} style={inputError(carType)}>
                                        <option>Select your car type</option>
                                        <option value={MODELS_CAR.AUDI_A1}>{MODELS_CAR.AUDI_A1}</option>
                                        <option value={MODELS_CAR.VOLKSWAGEN_GOLF}>{MODELS_CAR.VOLKSWAGEN_GOLF}</option>
                                        <option value={MODELS_CAR.TOYOTA_COROLLA}>{MODELS_CAR.TOYOTA_COROLLA}</option>
                                        <option value={MODELS_CAR.BMW_320}>{MODELS_CAR.BMW_320}</option>
                                        <option value={MODELS_CAR.MERCEDES_GLK}>{MODELS_CAR.MERCEDES_GLK}</option>
                                        <option
                                            value={MODELS_CAR.VOLKSWAGEN_PASSAT_CC}>{MODELS_CAR.VOLKSWAGEN_PASSAT_CC}
                                        </option>
                                    </select>
                                </div>

                                <BoxFormTimeInput
                                    title={'Pick-up'}
                                    valueTime={pickTime}
                                    handleTime={handlePickTime}
                                    inputError={inputError}
                                />

                                <BoxFormTimeInput
                                    title={'Drop-of'}
                                    valueTime={dropTime}
                                    handleTime={handleDropTime}
                                    inputError={inputError}
                                />

                                <button onClick={openModal} disabled={error !== ''}>
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <BookingModal
                modal={modal}
                setModal={setModal}
                openModal={openModal}
                setShowDoneMessage={setShowDoneMessage}
                carType={carType}
                pickTime={pickTime}
                dropTime={dropTime}
                imgUrl={imgUrl}
                carImg={carImg}
            />
        </>
    );
};
