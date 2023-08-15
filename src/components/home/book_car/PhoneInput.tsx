import React, {useState} from 'react';
import PhoneInput from 'react-phone-number-input';
import {parsePhoneNumberFromString, PhoneNumber} from 'libphonenumber-js';
import 'react-phone-number-input/style.css';


export const PhoneValidationExample: React.FC = () => {
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
            return !!phoneNumberInstance && phoneNumberInstance.isValid();
        } catch (error) {
            return false;
        }
    };

    return (
        <div>
            <h2>Валидация номера телефона</h2>
            <PhoneInput
                international
                placeholder="Введите номер телефона"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
            />
            {phoneNumber && !isValid && <p style={{color: 'red'}}>Неверный номер телефона</p>}
            {phoneNumber && isValid && <p style={{color: 'green'}}>Верный номер телефона</p>}
        </div>
    );
};


