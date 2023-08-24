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

    const [error, setError] = useState('')

    const [nameError, setNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [ageError, setAgeError] = useState('');

    const matchingCost = costCatDay.find(el => el.name === props.carType);
    const priceCar = matchingCost ? matchingCost.price : 0;

    const handleName = (e: ChangeEvent<HTMLInputElement>) => {
        // if (e.target.name === 'name') {
            setName(e.target.value);
        // }
        // setName(e.target.value);
    };

    const handleLastName = (e: ChangeEvent<HTMLInputElement>) => {
        // if (e.target.name === 'lastName') {
            setLastName(e.target.value);
        // }
        // setLastName(e.target.value);
    };

    const validPhoneNumber = (phoneNumber: string, value: boolean) => {
        console.log(phoneNumber)
        console.log(value)
        // if(value) {
        //     setPhone(phoneNumber)
        // } else {
        //     setError('asdasd')
        //     setPhone('')
        // }
        // if (e.target.name === 'phone') {
        //     setPhone(e.target.value);
        // }
        value ? setPhone(phoneNumber) : setPhone('')
    };

    const handleAge = (e: ChangeEvent<HTMLInputElement>) => {
        // if (e.target.name === 'age') {
            setAge(e.target.value);
        // }
        // setAge(e.target.value)
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

    const handleSubmit = () => {
        // Проверяем поля и устанавливаем ошибку, если что-то не введено





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
    }

    const inputError = (inputError: string) => {
        return error && !inputError ? {borderColor: 'red'} : {}
    }


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
                <div>{error}</div>
                <form className="info-form">
                    <div className="info-form__2col">
                        <InputFormModal
                            title={'First Name'}
                            value={name}
                            onChange={handleName}
                            type={'text'}
                            placeholder={'Enter your first name'}
                            inputError={inputError}
                            error={nameError}
                        />

                        <InputFormModal
                            title={'Last Name'}
                            value={lastName}
                            onChange={handleLastName}
                            type={'text'}
                            placeholder={'Enter your last name'}
                            inputError={inputError}
                            error={lastNameError}
                        />


                        <PhoneValidation validPhoneNumber={validPhoneNumber} error={phoneError}/>

                        <InputFormModal
                            title={'Age'}
                            value={age}
                            onChange={handleAge}
                            type={'number'}
                            placeholder={'18'}
                            inputError={inputError}
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