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
import {useAppDispatch, useAppSelector} from "../../../app/hooks/redux";
import {
    setCarType,
    setDropTime,
    setError,
    setModal,
    setPickTime,
    setShowDoneMessage
} from "../../../app/reducer/bookCar/bookCarInputValue-reducer";
import {priceBookCar, selectImagesBookCar} from "../../../app/reducer/bookCar/bookCarMoreInfo-reducer";
import {PATH} from "../../../app/PATH/PATH";
import {RedirectToPage} from "./RedirectToPage";


export enum MODELS_CAR {
    AUDI_A1 = 'Audi A1 S-Line',
    VOLKSWAGEN_GOLF = 'VW Golf 6',
    TOYOTA_COROLLA = 'Toyota Corolla',
    BMW_320 = 'BMW 320',
    MERCEDES_GLK = 'Mercedes GLK',
    VOLKSWAGEN_PASSAT_CC = 'VW Passat CC'
}

interface CarImagesType {
    [key: string]: string;
}


export const BookCar = () => {
    const dispatch = useAppDispatch();

    const modal = useAppSelector((state) => state.bookCarInputValue.modal);
    const carType = useAppSelector((state) => state.bookCarInputValue.carType);
    const pickTime = useAppSelector((state) => state.bookCarInputValue.pickTime);
    const dropTime = useAppSelector((state) => state.bookCarInputValue.dropTime);
    const error = useAppSelector((state) => state.bookCarInputValue.error);
    const showDoneMessage = useAppSelector((state) => state.bookCarInputValue.showDoneMessage);

    const checkUser = useAppSelector(state => state.auth.auth)

    const allCar = useAppSelector(state => state.carModels.items)

    const selectCarOption = 'Select your car type';

    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate() - 1}`

    const handleCar = (e: ChangeEvent<HTMLSelectElement>) => {
        const valueCar = e.currentTarget.value;

        const findCar = allCar.find(el => el.name === valueCar ? el.price : 0)
        const priceCar = findCar ? findCar.price : 0

        if (valueCar === selectCarOption) {
            dispatch(setCarType(''));
        } else {
            dispatch(setCarType(valueCar));
            dispatch(selectImagesBookCar(carImages[valueCar]));
            dispatch(setError(''));
            dispatch(priceBookCar(priceCar))
        }
    };

    const handlePickTime = (e: ChangeEvent<HTMLInputElement>) => {
        const valuePickTime = e.currentTarget.value;

        if (formattedDate >= valuePickTime) {
            dispatch(setPickTime(''))
            dispatch(setError("error: don't live in the past, choose the right date"))
        } else if (!dropTime || dropTime >= valuePickTime || dropTime === valuePickTime) {
            dispatch(setPickTime(valuePickTime))
            dispatch(setError(''))
        } else {
            dispatch(setPickTime(''))
            dispatch(setError('error: wrong rental date'))
        }
    };

    const handleDropTime = (e: ChangeEvent<HTMLInputElement>) => {
        const valueDropTime = e.currentTarget.value;

        if (formattedDate >= valueDropTime) {
            dispatch(setDropTime(''))
            dispatch(setError("error: don't live in the past, choose the right date"))
        } else if (pickTime <= valueDropTime || pickTime === valueDropTime) {
            dispatch(setDropTime(valueDropTime));
            dispatch(setError(''));
        } else {
            dispatch(setDropTime(''));
            dispatch(setError('error: wrong rental date'));
        }
    };

    const carImages: CarImagesType = {
        [MODELS_CAR.AUDI_A1]: CarAudi,
        [MODELS_CAR.VOLKSWAGEN_GOLF]: CarGolf,
        [MODELS_CAR.TOYOTA_COROLLA]: CarToyota,
        [MODELS_CAR.BMW_320]: CarBmw,
        [MODELS_CAR.MERCEDES_GLK]: CarMercedes,
        [MODELS_CAR.VOLKSWAGEN_PASSAT_CC]: CarPassat,
    };

    const inputError = (inputError: string) => {
        return error && !inputError ? {borderColor: 'red'} : {};
    };

    useEffect(() => {
        setTimeout(() => {
            dispatch(setShowDoneMessage(''));
        }, 8000);
    }, [dispatch, showDoneMessage]);

    const errorLoginMassage = "error: you are not registered, please register on the login page"

    const openModal = (e: React.MouseEvent) => {
        e.preventDefault();

        if (!checkUser.length) {
            dispatch(setError(errorLoginMassage));
            setTimeout(() => dispatch(setError("")), 8000)
        } else if (!pickTime || !dropTime || !carType) {
            dispatch(setError('error: Not all fields are filled!'));
        } else {
            dispatch(setModal(!modal));
            const modalDiv = document.querySelector('.booking-modal');
            modalDiv && modalDiv.scroll(0, 0);
        }
    };

    const modalClose = () => {
        dispatch(setModal(!modal));
    };

    return (
        <section id="booking-section" className="book__section">
            <div className={`modal__overlay ${modal ? 'active__modal' : ''}`} onClick={modalClose}/>
            <div className="container">
                <div className="book__content">
                    <div className="book__content__box">
                        <h2>Book a car</h2>
                        {error === errorLoginMassage
                            ?
                            <>
                                <BookShowMessage message={error} className={'error__message'}/>
                                <RedirectToPage
                                    to={PATH.LOGIN}
                                    text={'click to go to the login page'}
                                    className={'login__redirect'}
                                />
                            </>
                            :
                            <BookShowMessage message={error} className={'error__message'}/>

                        }
                        {showDoneMessage &&
                            <>
                                <BookShowMessage message={showDoneMessage} className={'done__message'}/>
                                <RedirectToPage
                                    to={PATH.GARAGE}
                                    text={'click to go to the garage page'}
                                    className={'garage__redirect'}
                                />
                            </>
                        }

                        <form className="box__form">
                            <div className="box-form__car-type">
                                <span>
                                    Select Your Car Type <b>*</b>
                                </span>

                                <select
                                    id={'car'}
                                    value={carType}
                                    onChange={handleCar}
                                    style={inputError(carType)}
                                    disabled={!allCar.length}
                                    title={!allCar.length ? 'disabled select' : ''}
                                >
                                    <option>{selectCarOption}</option>
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