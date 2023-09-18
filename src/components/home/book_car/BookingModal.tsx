import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {BookCarType} from "../../../app/reducer/bookCar";
import {v1} from "uuid";
import {PhoneValidation} from "./PhoneValidation";
import {InputFormModal} from "./InputFormModal";
import {BookingModalTitle} from "./BookingModalTitle";
import {BookingModalCarInfo} from "./BookingModalCarInfo";
import {
    setAge,
    setAgeError,
    setCarType,
    setDropTime,
    setLastName,
    setLastNameError,
    setModal,
    setName,
    setNameError,
    setPhone,
    setPhoneError,
    setPickTime,
    setShowDoneMessage
} from "../../../app/reducer/bookCarInputValue-reducer";
import {bookCarAdd} from "../../../app/reducer/bookCar-reducer";
import {priceBookCar} from "../../../app/reducer/bookCarMoreInfo-reducer";


export const BookingModal = () => {
    const dispatch = useAppDispatch()
    const costCatDay = useAppSelector(state => state.carModels.items)

    const modal = useAppSelector(state => state.bookCarInputValue.modal)

    const carType = useAppSelector(state => state.bookCarInputValue.carType)
    const pickTime = useAppSelector(state => state.bookCarInputValue.pickTime)
    const dropTime = useAppSelector(state => state.bookCarInputValue.dropTime)
    const carImg = useAppSelector(state => state.bookCarInputValue.carImg)

    const name = useAppSelector(state => state.bookCarInputValue.name)
    const lastName = useAppSelector(state => state.bookCarInputValue.lastName)
    const phone = useAppSelector(state => state.bookCarInputValue.phone)
    const age = useAppSelector(state => state.bookCarInputValue.age)

    const nameError = useAppSelector(state => state.bookCarInputValue.nameError)
    const lastNameError = useAppSelector(state => state.bookCarInputValue.lastNameError)
    const ageError = useAppSelector(state => state.bookCarInputValue.ageError)

    const isValid = useAppSelector(state => state.bookCarInputValue.isValid)

    const matchingCost = costCatDay.find(el => el.name === carType);
    const priceCar = matchingCost ? matchingCost.price : 0;

    const handleChange = (nameInput: string, value: string,) => {
        switch (nameInput) {
            case 'First Name':
                dispatch(setName(value));
                dispatch(setNameError(''));
                break;
            case 'Last Name':
                dispatch(setLastName(value));
                dispatch(setLastNameError(''));
                break;
            case 'Age':
                dispatch(setAge(value));
                dispatch(setAgeError(''));
                break;
            default:
                break;
        }
    };

    const orderCar = () => {
        const newRentCar: BookCarType = {
            carType,
            pickTime,
            dropTime,
            carImg,
            name,
            lastName,
            phone,
            age,
            id: v1(),
            price: priceCar
        }

        const errors = {
            name: !name ? 'Please enter your name' : '',
            lastName: !lastName ? 'Please enter your last name' : '',
            phone: !phone
                ? 'Please enter your phone number'
                : (!isValid)
                    ? 'Please enter correct phone number'
                    : '',
            age: !age
                ? 'Please enter your age'
                : Number(age) < 17
                    ? 'You cannot book a car, you are under 18 years old'
                    : Number(age) > 80 ? 'You cannot book a car, you are over 80 years old'
                        : ''
        };

        dispatch(setNameError(errors.name))
        dispatch(setLastNameError(errors.lastName))
        dispatch(setPhoneError(errors.phone))
        dispatch(setAgeError(errors.age))

        if (Object.values(errors).every(error => error === '')) {
            dispatch(bookCarAdd(newRentCar));
            dispatch(setModal(!modal))
            dispatch(priceBookCar(priceCar))
            dispatch(setShowDoneMessage('The order has been placed correctly and is in your personal account.'))
            dispatch(setCarType(''))
            dispatch(setPickTime(''))
            dispatch(setDropTime(''))
            dispatch(setName(''))
            dispatch(setLastName(''))
            dispatch(setPhone(''))
            dispatch(setAge(''))
        }
    }

    return (
        <div className={`booking-modal ${modal ? "active__modal" : ""}`}>
            <BookingModalTitle/>
            <BookingModalCarInfo/>

            <div className="booking-modal__person-info">
                <h4>Personal Information</h4>
                <form className="info-form">
                    <div className="info-form__2col">
                        <InputFormModal
                            title={'First Name'}
                            value={name}
                            onChange={handleChange}
                            setValue={setName}
                            setError={setNameError}
                            type={'text'}
                            placeholder={'Enter your first name'}
                            error={nameError}
                        />

                        <InputFormModal
                            title={'Last Name'}
                            value={lastName}
                            onChange={handleChange}
                            setValue={setLastName}
                            setError={setLastNameError}
                            type={'text'}
                            placeholder={'Enter your last name'}
                            error={lastNameError}
                        />

                        <PhoneValidation/>

                        <InputFormModal
                            title={'Age'}
                            value={age}
                            onChange={handleChange}
                            setValue={setAge}
                            setError={setAgeError}
                            type={'number'}
                            placeholder={'18'}
                            error={ageError}
                        />
                    </div>
                </form>
                <div className="reserve-button">
                    <button onClick={orderCar}>Reserve Now</button>
                </div>
            </div>
        </div>
    );
};