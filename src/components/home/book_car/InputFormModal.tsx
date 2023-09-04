import React, {ChangeEvent} from 'react';

type InputFormModalPropsType = {
    title: string
    value: string
    onChange: (nameInput: string, value: string) => void
    setValue: (value: string) => void
    setError: (error: string) => void
    type: string
    placeholder: string
    error: string
}

export const InputFormModal = (props: InputFormModalPropsType) => {
    const inputErrorText = props.error ? {fontSize: '1.4rem', color: 'red'} : {}
    const inputError = props.error ? {border: '1.5px solid red'} : {}

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(props.title, e.currentTarget.value);
    };

    return (
        <span>
            <label>
                {props.title} <b>*</b>
            </label>
            <input
                value={props.value}
                onChange={handleChange}
                type={props.type}
                placeholder={props.placeholder}
                style={inputError}
            />
            {props.error && <span style={inputErrorText}>{props.error}</span>}
        </span>
    );
};

