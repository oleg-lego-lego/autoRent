import React from 'react';
import PhoneInput from 'react-phone-number-input';
import {parsePhoneNumberFromString, PhoneNumber} from 'libphonenumber-js';
import 'react-phone-number-input/style.css';


type PhoneValidationPropsType = {
    error: string;
    phone: string;
    setPhone: (valueNumber: string) => void;
    isValid: boolean
    setIsValid: (validValue: boolean) => void;
};

export const PhoneValidation = (props: PhoneValidationPropsType) => {
    const handlePhoneNumberChange = (value: string) => {
        props.setPhone(value);
        const valid = validatePhoneNumber(value);
        props.setIsValid(valid);
    };

    const validatePhoneNumber = (value: string): boolean => {
        try {
            const phoneNumberInstance = parsePhoneNumberFromString(value) as PhoneNumber;
            return !!phoneNumberInstance && phoneNumberInstance.isValid();
        } catch (error) {
            return false;
        }
    };

    const inputErrorText = props.error ? {fontSize: '1.4rem', color: 'red'} : {};

    return (
        <div className="PhoneValidation">
            <h2>Phone Number <b>*</b></h2>
            <PhoneInput
                value={props.phone}
                onChange={handlePhoneNumberChange}
                international
                placeholder="Enter your phone number"
            />

            {props.phone && !props.isValid && <p style={{color: 'red', fontSize: '14px'}}>error: wrong phone number</p>}
            {props.phone && props.isValid && <p style={{color: 'green', fontSize: '14px'}}>Valid phone number</p>}
            {props.error && !props.phone && <span style={inputErrorText}>{props.error}</span>}
        </div>
    );
};


