import React, {useEffect, useState} from 'react';
import PhoneInput from 'react-phone-number-input';
import {parsePhoneNumberFromString, PhoneNumber} from 'libphonenumber-js';
import 'react-phone-number-input/style.css';

// export const PhoneValidation = (props: PhoneValidationPropsType) => {
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [isValid, setIsValid] = useState(false);
//
//     const handlePhoneNumberChange = (value: string) => {
//         // isValid ? props.setPhone(value) : props.setPhone('')
//         setPhoneNumber(value)
//         setIsValid(validatePhoneNumber(value));
//     };
//
//     const validatePhoneNumber = (value: string): boolean => {
//         try {
//             const phoneNumberInstance = parsePhoneNumberFromString(value) as PhoneNumber;
//             return !!phoneNumberInstance && phoneNumberInstance.isValid();
//         } catch (error) {
//             return false;
//         }
//     };
//
//     useEffect(() => {
//         if (props.phoneDel) {
//             setPhoneNumber('');
//             setIsValid(false);
//             props.validPhoneNumber('', isValid);
//             console.log(props.phoneDel)
//             console.log(phoneNumber)
//         } else {
//             props.validPhoneNumber(phoneNumber, isValid);
//         }
//     }, [props.phoneDel, props.validPhoneNumber, props, phoneNumber, isValid]);
//
//     const inputErrorText = props.error ? {fontSize: '1.4rem', color: 'red'} : {};
//
//     const handleSubmit = () => {
//         setPhoneNumber('');
//         setIsValid(false);
//     };
//
//     return (
//         <div className="PhoneValidation">
//             <h2>Phone Number <b>*</b></h2>
//             <PhoneInput
//                 value={phoneNumber}
//                 onChange={props.phoneDel ? handleSubmit : handlePhoneNumberChange}
//                 international
//                 placeholder="Enter your phone number"
//             />
//
//             {phoneNumber && !isValid && <p style={{color: 'red', fontSize: '14px'}}>error: wrong phone number</p>}
//             {phoneNumber && isValid && <p style={{color: 'green', fontSize: '14px'}}>Valid phone number</p>}
//             {props.error && !phoneNumber && <span style={inputErrorText}>{props.error}</span>}
//         </div>
//     );
// };

// type PhoneValidationPropsType = {
//     validPhoneNumber: (phoneNumber: string, isValid: boolean) => void;
//     error: string;
//     phone: string;
//     setPhone: (valueNumber: string) => void;
//     phoneDel: boolean;
// };

// export const PhoneValidation = (props: PhoneValidationPropsType) => {
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [isValid, setIsValid] = useState(false);
//
//     const handlePhoneNumberChange = (value: string) => {
//         setPhoneNumber(value);
//         const valid = validatePhoneNumber(value);
//         setIsValid(valid);
//     };
//
//     const validatePhoneNumber = (value: string): boolean => {
//         try {
//             const phoneNumberInstance = parsePhoneNumberFromString(value) as PhoneNumber;
//             return !!phoneNumberInstance && phoneNumberInstance.isValid();
//         } catch (error) {
//             return false;
//         }
//     };
//
//     useEffect(() => {
//         if (props.phoneDel) {
//             setPhoneNumber('');
//             setIsValid(false);
//             props.validPhoneNumber('', false);
//         } else {
//             props.validPhoneNumber(phoneNumber, isValid);
//         }
//     }, [props.phoneDel, props.validPhoneNumber, phoneNumber, isValid, props]);
//
//     const inputErrorText = props.error ? {fontSize: '1.4rem', color: 'red'} : {};
//
//     const handleSubmit = () => {
//         setPhoneNumber('');
//         setIsValid(false);
//         props.validPhoneNumber('');
//     };
//
//     return (
//         <div className="PhoneValidation">
//             <h2>Phone Number <b>*</b></h2>
//             <PhoneInput
//                 value={phoneNumber}
//                 onChange={props.phoneDel ? handleSubmit : handlePhoneNumberChange}
//                 international
//                 placeholder="Enter your phone number"
//             />
//
//             {phoneNumber && !isValid && <p style={{color: 'red', fontSize: '14px'}}>error: wrong phone number</p>}
//             {phoneNumber && isValid && <p style={{color: 'green', fontSize: '14px'}}>Valid phone number</p>}
//             {props.error && !phoneNumber && <span style={inputErrorText}>{props.error}</span>}
//         </div>
//     );
// };


type PhoneValidationPropsType = {
    validPhoneNumber: (phoneNumber: string, isValid: boolean) => void;
    error: string;
    phone: string;
    setPhone: (valueNumber: string) => void;
    phoneDel: boolean;
};

export const PhoneValidation = (props: PhoneValidationPropsType) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isValid, setIsValid] = useState(false);

    const handlePhoneNumberChange = (value: string) => {
        setPhoneNumber(value);
        const valid = validatePhoneNumber(value);
        setIsValid(valid);
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
        if (props.phoneDel) {
            setPhoneNumber('');
            setIsValid(false);
            props.validPhoneNumber('', false);
        } else {
            props.validPhoneNumber(phoneNumber, isValid);
        }
    }, [props.phoneDel, props.validPhoneNumber, phoneNumber, isValid]);

    const inputErrorText = props.error ? {fontSize: '1.4rem', color: 'red'} : {};

    const handleSubmit = () => {
        setPhoneNumber('');
        setIsValid(false);
        props.validPhoneNumber('', false);
    };

    return (
        <div className="PhoneValidation">
            <h2>Phone Number <b>*</b></h2>
            <PhoneInput
                value={phoneNumber}
                onChange={props.phoneDel ? handleSubmit : handlePhoneNumberChange}
                international
                placeholder="Enter your phone number"
            />

            {phoneNumber && !isValid && <p style={{ color: 'red', fontSize: '14px' }}>error: wrong phone number</p>}
            {phoneNumber && isValid && <p style={{ color: 'green', fontSize: '14px' }}>Valid phone number</p>}
            {props.error && !phoneNumber && <span style={inputErrorText}>{props.error}</span>}
        </div>
    );
};


