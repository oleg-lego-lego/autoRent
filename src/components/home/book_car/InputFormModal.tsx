import React, {ChangeEvent} from 'react';

type InputFormModalPropsType = {
    title: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    type: string
    placeholder: string
    inputError: (inputError: string) => {}
    error: string
}

export const InputFormModal = (props: InputFormModalPropsType) => {
    const inputErrorText = props.error ? {fontSize: '1.4rem', color: 'red'} : {}
    const inputError = props.error ? {border: '1.5px solid red'} : {}

    return (
        <span>
            <label>
                {props.title} <b>*</b>
            </label>
            <input
                value={props.value}
                onChange={props.onChange}
                type={props.type}
                placeholder={props.placeholder}
                style={inputError}
            />
            {props.error && <span style={inputErrorText}>{props.error}</span>}
        </span>
    );
};

