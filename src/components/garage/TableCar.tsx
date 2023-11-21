import React from 'react';

type TableCarPropsType = {
    description: string
    title: string
}

export const TableCar = (props: TableCarPropsType) => {
    return (
        <div className="pick-description__table__col">
            <span>{props.description}</span>
            <span>{props.title}</span>
        </div>
    );
};

