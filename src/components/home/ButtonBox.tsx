import React from 'react';
import {CarModelsType} from "../../app/reducer/carModels/carModels";

type ButtonBoxPropsType = {
    data: CarModelsType
    coloringButton: (id: string) => string
    setActiveButton: (value: string) => void
}

export const ButtonBox = (props: ButtonBoxPropsType) => {
    const coloringButton = (id: string) => props.coloringButton(id)

    return (
        <button
            className={`${coloringButton(props.data.id)}`}
            onClick={() => props.setActiveButton(props.data.id)}
        >
            {props.data.name}
        </button>
    );
};
