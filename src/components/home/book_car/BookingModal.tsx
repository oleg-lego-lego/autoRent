import React, {ChangeEvent, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {BookCarType} from "../../../app/reducer/bookCar";
import {v1} from "uuid";
import {bookCarAdd} from "../../../app/reducer/bookCar-reducer";
import {PhoneValidation} from "./PhoneValidation";
import {InputFormModal} from "./InputFormModal";

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
        // if (value) {
        //     setPhoneError('')
        //     setPhone(phoneNumber)
        // } else {
        //     // setPhone('')
        //     setPhoneError('asd')
        // }
        // if (e.target.name === 'phone') {
        //     setPhone(e.target.value);
        // }
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
//         // Инициализация объекта ошибок
//         const errors: any = {};
//
// // Проверка имени
//         if (!name) {
//             errors.name = 'Please enter your name';
//         }
//
// // Проверка фамилии
//         if (!lastName) {
//             errors.lastName = 'Please enter your last name';
//         }
//
// // Проверка номера телефона
//         if (!phone) {
//             errors.phone = 'Please enter your phone number';
//         }
//
// // Проверка возраста
//         if (!age) {
//             errors.age = 'Please enter your age';
//         } else if (Number(age) < 17) {
//             errors.age = 'You cannot book a car, you are under 18 years old';
//             setAge('');
//         }
//
// // Установка состояния ошибок
//         setError(Object.values(errors).join('\n'));
//
// // Если нет ошибок, отправить данные
//         if (Object.keys(errors).length === 0) {
//             setError('');
//             dispatch(bookCarAdd(newRentCar));
//         }


        // setError('');

        // Обновляем соответствующее состояние на основе значения в поле ввода
        // if (e.target.name === 'name') {
        //     setName(e.target.value);
        // } else if (e.target.name === 'lastName') {
        //     setLastName(e.target.value);
        // } else if (e.target.name === 'phone') {
        //     setPhone(e.target.value);
        // } else if (e.target.name === 'age') {
        //     setAge(e.target.value);
        // }

        // if (!name) {
        //     setError('Please enter your name');
        // } else if (!lastName) {
        //     setError('Please enter your last name');
        // } else if (!phone) {
        //     setError('Please enter your phone number');
        // } else if (!age) {
        //     setError('Please enter your age');
        // } else if (Number(age) < 17) {
        //     setError('You cannot book a car, you are under 18 years old');
        //     setAge('');
        // } else {
        //     setError('');
        //     // Если ошибок нет, отправляем данные
        //     dispatch(bookCarAdd(newRentCar));
        // }

        if (!name) {
            setNameError('Please enter your name');
        } else {
            setNameError('');
        }

        if (!lastName) {
            setLastNameError('Please enter your last name');
        } else {
            setLastNameError('');
        }

        if (!phone) {
            setPhoneError('Please enter your phone number');
        } else {
            setPhoneError('');
        }

        if (!age) {
            setAgeError('Please enter your age');
        } else if (Number(age) < 17) {
            setAgeError('You cannot book a car, you are under 18 years old');
            setAge('');
        } else {
            setAgeError('');
            dispatch(bookCarAdd(newRentCar));
        }
    }

    // if (!name || !lastName || !phone || !age) {
    //     setError('error: Not all fields are filled!');
    // } else if (Number(age) < 17) {
    //     setError('error: you cannot book a car, you are under 18 years old!');
    //     setAge('');
    // } else if (!phone) {
    //     setError('error: check phone number!');
    // } else {
    //     setError('');
    //     dispatch(bookCarAdd(newRentCar));
    // }
    return (
        <div className={`booking-modal ${props.modal ? "active-modal" : ""}`}>
            <div className="booking-modal__title">
                <h2>Complete Reservation</h2>
                {/*<i onClick={openModal} className="fa-solid fa-xmark"></i>*/}
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
            {/* car info */}
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
                        <span>Car -</span> {props.carType} <span>- {priceCar}$ per day</span>
                    </h5>
                    {props.imgUrl && <img src={props.imgUrl} alt="car_img"/>}
                </div>
            </div>
            {/* personal info */}
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