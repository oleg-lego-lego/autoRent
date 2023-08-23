import React, {ChangeEvent} from 'react';
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

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
                style={props.inputError(props.value)}
                // style={{borderColor: 'red'}}
            />
            {props.error && <span>{props.error}</span>}
        </span>
    );
};

