import React, {ChangeEvent, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {BookCarType} from "../../../app/reducer/bookCar";
import {v1} from "uuid";
import {bookCarAdd} from "../../../app/reducer/bookCar-reducer";
import {PhoneValidation} from "./PhoneValidation";
import {InputFormModal} from "./InputFormModal";
import {BookingModalTitle} from "./BookingModalTitle";
import {BookingModalCarInfo} from "./BookingModalCarInfo";

type BookingModalPropsType = {
    modal: boolean
    openModal: any
    pickTime: string
    dropTime: string
    carType: string
    imgUrl: string
    carImg: string
}

export const BookingModal = (props: BookingModalPropsType) => {
    const dispatch = useAppDispatch()
    const costCatDay = useAppSelector(state => state.carModels.items)

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");

    const [nameError, setNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [ageError, setAgeError] = useState('');

    const matchingCost = costCatDay.find(el => el.name === props.carType);
    const priceCar = matchingCost ? matchingCost.price : 0;

    const validPhoneNumber = (phoneNumber: string, value: boolean) => {
        value ? setPhone(phoneNumber) : setPhone('')
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>,
                               setValue: (value: string) => void,
                               setError: (error: string) => void) => {
        if (e) {
            setValue(e.currentTarget.value);
            setError('');
        }
    };

    const orderCar = () => {
        const newRentCar: BookCarType = {
            carType: props.carType,
            pickTime: props.pickTime,
            dropTime: props.dropTime,
            carImg: props.carImg,
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
            phone: !phone ? 'Please enter your phone number' : '',
            age: !age
                ? 'Please enter your age'
                : Number(age) < 17
                    ? 'You cannot book a car, you are under 18 years old'
                    : Number(age) > 80 ? 'You cannot book a car, you are over 80 years old'
                        : ''
        };

        setNameError(errors.name);
        setLastNameError(errors.lastName);
        setPhoneError(errors.phone);
        setAgeError(errors.age);

        if (Object.values(errors).every(error => error === '')) {
            dispatch(bookCarAdd(newRentCar));
        }
    }

    return (
        <div className={`booking-modal ${props.modal ? "active-modal" : ""}`}>
            <BookingModalTitle/>
            <BookingModalCarInfo
                carType={props.carType}
                priceCar={priceCar}
                imgUrl={props.imgUrl}
                pickTime={props.pickTime}
                dropTime={props.dropTime}
            />

            <div className="booking-modal__person-info">
                <h4>Personal Information</h4>
                <form className="info-form">
                    <div className="info-form__2col">
                        <InputFormModal
                            title={'First Name'}
                            value={name}
                            onChange={handleInputChange}
                            setValue={setName}
                            setError={setNameError}
                            type={'text'}
                            placeholder={'Enter your first name'}
                            error={nameError}
                        />

                        <InputFormModal
                            title={'Last Name'}
                            value={lastName}
                            onChange={handleInputChange}
                            setValue={setLastName}
                            setError={setLastNameError}
                            type={'text'}
                            placeholder={'Enter your last name'}
                            error={lastNameError}
                        />

                        <PhoneValidation validPhoneNumber={validPhoneNumber} error={phoneError}/>

                        <InputFormModal
                            title={'Age'}
                            value={age}
                            onChange={handleInputChange}
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