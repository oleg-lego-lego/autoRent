import React, {useState} from 'react';
import PhoneInput from 'react-phone-number-input';
import {parsePhoneNumberFromString, PhoneNumber} from 'libphonenumber-js';
import 'react-phone-number-input/style.css';

type PhoneValidationPropsType = {
    validPhoneNumber: (phoneNumber: string) => void
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

            // Проверка на валидность номера и его длину
            props.validPhoneNumber(value)
            return !!phoneNumberInstance && phoneNumberInstance.isValid();
        } catch (error) {
            return false;
        }
    };

    return (
        <div className="PhoneValidation">
            <h2>Phone Number <b>*</b></h2>
            <PhoneInput
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                international
                placeholder="Enter your phone number"
            />
            {phoneNumber && !isValid && <p style={{color: 'red'}}>Неверный номер телефона</p>}
            {phoneNumber && isValid && <p style={{color: 'green'}}>Верный номер телефона</p>}
        </div>
    );
};


