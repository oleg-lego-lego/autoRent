import React from 'react';
import PhoneInput from 'react-phone-number-input';
import {parsePhoneNumberFromString, PhoneNumber} from 'libphonenumber-js';
import 'react-phone-number-input/style.css';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {setIsValid, setPhone} from "../../../app/reducer/bookCarInputValue-reducer";


export const PhoneValidation = () => {
    const dispatch = useAppDispatch()

    const phone = useAppSelector(state => state.bookCarInputValue.phone)
    const isValid = useAppSelector(state => state.bookCarInputValue.isValid)
    const phoneError = useAppSelector(state => state.bookCarInputValue.phoneError)

    const handlePhoneNumberChange = (value: string) => {
        dispatch(setPhone(value))
        const valid = validatePhoneNumber(value);
        dispatch(setIsValid(valid))
    };

    const validatePhoneNumber = (value: string): boolean => {
        try {
            const phoneNumberInstance = parsePhoneNumberFromString(value) as PhoneNumber;
            return !!phoneNumberInstance && phoneNumberInstance.isValid();
        } catch (error) {
            return false;
        }
    };

    const inputErrorText = phoneError ? {fontSize: '1.4rem', color: 'red'} : {};

    return (
        <div className="PhoneValidation">
            <h2>Phone Number <b>*</b></h2>
            <PhoneInput
                id={'phoneInputField'}
                name={'phoneNumber'}
                value={phone}
                onChange={handlePhoneNumberChange}
                international
                placeholder={'Enter your phone number'}
            />

            {phone && !isValid && <p style={{color: 'red', fontSize: '14px'}}>error: wrong phone number</p>}
            {phone && isValid && <p style={{color: 'green', fontSize: '14px'}}>Valid phone number</p>}
            {phoneError && !phone && <span style={inputErrorText}>{phoneError}</span>}
        </div>
    );
};
