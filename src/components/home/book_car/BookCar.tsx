import React, {ChangeEvent, useEffect} from 'react';
import CarAudi from "../../../images/cars-big/audia1.jpg";
import CarGolf from "../../../images/cars-big/golf6.jpg";
import CarToyota from "../../../images/cars-big/toyota-corolla.jpg";
import CarBmw from "../../../images/cars-big/bmw320.jpg";
import CarMercedes from "../../../images/cars-big/benz.jpg";
import CarPassat from "../../../images/cars-big/passatcc.jpg";
import {BookingModal} from "./BookingModal";
import {BoxFormTimeInput} from "./BoxFormTimeInput";
import {BookShowMessage} from "./BookShowMessage";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {
    setCarImg,
    setCarType,
    setDropTime,
    setError,
    setModal,
    setPickTime,
    setShowDoneMessage
} from "../../../app/reducer/bookCarInputValue-reducer";
import {selectImagesBookCar} from "../../../app/reducer/bookCarMoreInfo-reducer";


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
    const dispatch = useAppDispatch()

    const modal = useAppSelector(state => state.bookCarInputValue.modal)

    const carType = useAppSelector(state => state.bookCarInputValue.carType)
    const pickTime = useAppSelector(state => state.bookCarInputValue.pickTime)
    const dropTime = useAppSelector(state => state.bookCarInputValue.dropTime)
    const carImg = useAppSelector(state => state.bookCarInputValue.carImg)

    const error = useAppSelector(state => state.bookCarInputValue.error)

    const showDoneMessage = useAppSelector(state => state.bookCarInputValue.showDoneMessage)

    const openModal = (e: React.MouseEvent) => {
        e.preventDefault();
        if (!pickTime || !dropTime || !carType) {
            dispatch(setError('error: Not all fields are filled!'))
        } else {
            dispatch(setModal(!modal))
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
        dispatch(setCarType(e.target.value))
        dispatch(setCarImg(e.target.value))
        dispatch(setError(''))
    };

    const handlePickTime = (e: ChangeEvent<HTMLInputElement>) => {
        if (!dropTime || dropTime >= e.target.value || dropTime === e.target.value) {
            dispatch(setPickTime(e.target.value))
            dispatch(setError(''))
        } else {
            dispatch(setPickTime(''))
            dispatch(setError('error: wrong rental date'))
        }
    };

    const handleDropTime = (e: ChangeEvent<HTMLInputElement>) => {
        if (pickTime <= e.target.value || pickTime === e.target.value) {
            dispatch(setDropTime(e.target.value))
            dispatch(setError(''))
        } else {
            dispatch(setDropTime(''))
            dispatch(setError('error: wrong rental date'))
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
    dispatch(selectImagesBookCar(imgUrl))

    const inputError = (inputError: string) => {
        return error && !inputError ? {borderColor: 'red'} : {}
    }

    useEffect(() => {
        setTimeout(() => {
            dispatch(setShowDoneMessage(''))
        }, 8000);
    }, [dispatch, showDoneMessage]);

    const modalClose = () => {
        dispatch(setModal(!modal))
    }

    return (
        <section id="booking-section" className="book-section">
            <div className={`modal-overlay ${modal ? "active-modal" : ""}`} onClick={modalClose}/>
            <div className="container">
                <div className="book-content">
                    <div className="book-content__box">
                        <h2>Book a car</h2>
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

            <BookingModal/>
        </section>
    );
};
