import React from 'react';

type ButtonBoxPropsType = {
    title: string
    btnID: string
    active: string
    buttonId: (id: string) => void
    coloringButton: (id: string) => string
    setActiveButton: (value: string) => void
}

export const ButtonBox = (props: ButtonBoxPropsType) => {
    const btnID = (id: string) => props.buttonId(id)
    const coloringButton = (id: string) => props.coloringButton(id)

    return (
        <button
            className={`${coloringButton(props.btnID)}`}
            onClick={() => {
                props.setActiveButton(props.active);
                btnID(props.btnID);
            }}
        >
            {props.title}
        </button>
    );
};
