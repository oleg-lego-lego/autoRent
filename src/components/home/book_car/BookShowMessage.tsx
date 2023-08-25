import React from 'react';

type BookShowMessagePropsType ={
    message: string
    className: string
}

export const BookShowMessage = (props: BookShowMessagePropsType) => {
    return (
        <div style={!props.message ? {display: 'none'} : {}} className={props.className}>
            {props.message}
        </div>
    );
};
