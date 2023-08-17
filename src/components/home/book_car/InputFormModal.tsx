import React, {ChangeEvent} from 'react';

type InputFormModalPropsType = {
    title: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    type: string
    placeholder: string
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
            />
        </span>
    );
};

