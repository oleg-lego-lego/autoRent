import React, {useEffect, useState} from 'react';
import PhoneInput from 'react-phone-number-input';
import {parsePhoneNumberFromString, PhoneNumber} from 'libphonenumber-js';
import 'react-phone-number-input/style.css';

type PhoneValidationPropsType = {
    validPhoneNumber: (phoneNumber: string, value: boolean) => void
    error: string
}

export const PhoneValidation = (props: PhoneValidationPropsType) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isValid, setIsValid] = useState(false);

    const handlePhoneNumberChange = (value: string) => {
        setPhoneNumber(value);
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

    useEffect(() => {
        props.validPhoneNumber(phoneNumber, isValid);
    }, [phoneNumber, isValid, props]);

    const inputErrorText = props.error ? {fontSize: '1.4rem', color: 'red'} : {};

    return (
        <div className="PhoneValidation">
            <h2>Phone Number <b>*</b></h2>
            <PhoneInput
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                international
                placeholder="Enter your phone number"
            />

            {phoneNumber && !isValid && <p style={{color: 'red', fontSize: '14px'}}>error: wrong phone number</p>}
            {phoneNumber && isValid && <p style={{color: 'green', fontSize: '14px'}}>Valid phone number</p>}
            {props.error && !phoneNumber && <span style={inputErrorText}>{props.error}</span>}
        </div>
    );
};


