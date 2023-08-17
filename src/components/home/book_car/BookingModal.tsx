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

    const matchingCost = costCatDay.find(el => el.name === props.carType);
    const priceCar = matchingCost ? matchingCost.price : 0;


    // taking value of modal inputs
    const handleName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleLastName = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };

    const validPhoneNumber = (phoneNumber: string) => {
        setPhone(phoneNumber);
    };

    const handleAge = (e: ChangeEvent<HTMLInputElement>) => {
        setAge(e.target.value);
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
        dispatch(bookCarAdd(newRentCar))
    }


    return (
        <div className={`booking-modal ${props.modal ? "active-modal" : ""}`}>
            {/* title */}
            <div className="booking-modal__title">
                <h2>Complete Reservation</h2>
                {/*<i onClick={openModal} className="fa-solid fa-xmark"></i>*/}
            </div>
            {/* message */}
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
                            onChange={handleName}
                            type={'text'}
                            placeholder={'Enter your first name'}
                        />
                            {/*<span>*/}
                            {/*    <label>*/}
                            {/*      First Name <b>*</b>*/}
                            {/*    </label>*/}
                            {/*    <input*/}
                            {/*        value={name}*/}
                            {/*        onChange={handleName}*/}
                            {/*        type="text"*/}
                            {/*        placeholder="Enter your first name"*/}
                            {/*    />*/}
                            {/*</span>*/}

                        <InputFormModal
                            title={'Last Name'}
                            value={lastName}
                            onChange={handleLastName}
                            type={'text'}
                            placeholder={'Enter your last name'}
                        />

                        {/*<span>*/}
                        {/*        <label>*/}
                        {/*          Last Name <b>*</b>*/}
                        {/*        </label>*/}
                        {/*        <input*/}
                        {/*            value={lastName}*/}
                        {/*            onChange={handleLastName}*/}
                        {/*            type="text"*/}
                        {/*            placeholder="Enter your last name"*/}
                        {/*        />*/}
                        {/*    </span>*/}

                        {/*<span>*/}
                        {/*        <label htmlFor="phone">*/}
                        {/*          Phone Number <b>*</b>*/}
                        {/*        </label>*/}
                        {/*        <input*/}
                        {/*            type="tel"*/}
                        {/*            id="phone"*/}
                        {/*            value={phone}*/}
                        {/*            onChange={handlePhone}*/}
                        {/*            placeholder="Enter your phone number"*/}
                        {/*            pattern={"[0-9]{10}"}*/}
                        {/*            required*/}
                        {/*            // onKeyDown={e => /[+\-.,]$/.test(e.key) && e.preventDefault()}*/}
                        {/*        />*/}
                        {/*    </span>*/}

                        <PhoneValidation validPhoneNumber={validPhoneNumber}/>

                        <InputFormModal
                            title={'Age'}
                            value={age}
                            onChange={handleAge}
                            type={'number'}
                            placeholder={'18'}
                        />
                        <InputFormModal
                            title={'Age'}
                            value={age}
                            onChange={handleAge}
                            type={'number'}
                            placeholder={'18'}
                        />

                        {/*<span>*/}
                        {/*        <label>*/}
                        {/*          Age <b>*</b>*/}
                        {/*        </label>*/}
                        {/*        <input*/}
                        {/*            value={age}*/}
                        {/*            onChange={handleAge}*/}
                        {/*            type="number"*/}
                        {/*            placeholder="18"*/}
                        {/*        />*/}
                        {/*    </span>*/}
                    </div>
                </form>
                <div className="reserve-button">
                    <button onClick={orderCar}>Reserve Now</button>
                </div>
            </div>
        </div>
    );
};