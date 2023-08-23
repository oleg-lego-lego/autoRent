import React, {useEffect, useState} from 'react';
import PhoneInput from 'react-phone-number-input';
import {parsePhoneNumberFromString, PhoneNumber} from 'libphonenumber-js';
import 'react-phone-number-input/style.css';

type PhoneValidationPropsType = {
    validPhoneNumber: (phoneNumber: string, value: boolean) => void
}


export const PhoneValidation = (props: PhoneValidationPropsType) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isValid, setIsValid] = useState(false);

    const handlePhoneNumberChange = (value: string) => {
        setPhoneNumber(value);
        // Проверка на валидность номера телефона
        setIsValid(validatePhoneNumber(value));
    };

    const validatePhoneNumber = (value: string): boolean => {
        try {
            const phoneNumberInstance = parsePhoneNumberFromString(value) as PhoneNumber;
            return !!phoneNumberInstance && phoneNumberInstance.isValid();
        } catch (error) {
            return false;
        }
    };

    // const inputError = (inputError: string) => {
    //     return isValid && !inputError ? {border: '2px solid red'} : {};
    // }
    //
    // const inputClass = isValid ? '' : 'error1';
    // props.validPhoneNumber(phoneNumber, isValid)

    useEffect(() => {
        // Вызывается после завершения рендеринга компонента
        props.validPhoneNumber(phoneNumber, isValid);
    }, [phoneNumber, isValid]);

    return (
        <div className="PhoneValidation">
            <h2>Phone Number <b>*</b></h2>
            <PhoneInput
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                international
                placeholder="Enter your phone number"
            />

            {phoneNumber && !isValid && <p style={{color: 'red', fontSize: '16px'}}>error: wrong phone number</p>}
            {phoneNumber && isValid && <p style={{color: 'green' , fontSize: '16px'}}>Valid phone number</p>}
        </div>
    );
};


