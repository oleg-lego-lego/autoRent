import React, {ChangeEvent} from 'react';

type BoxFormTimeInputPropsType = {
    title: string
    valueTime: string
    handleTime: (e: ChangeEvent<HTMLInputElement>) => void
    inputError: (inputError: string) => {}
}

export const BoxFormTimeInput = (props: BoxFormTimeInputPropsType) => {
    return (
        <div className="box-form__car-time">
            <span>
                {props.title} <b>*</b>
            </span>
            <input
                id={props.valueTime}
                value={props.valueTime}
                onChange={props.handleTime}
                type="date"
                style={props.inputError(props.valueTime)}
            />
        </div>
    );
};

