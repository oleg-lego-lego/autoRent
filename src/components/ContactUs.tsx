import React from 'react';

type ContactUsPropsType = {
    title: string
    href: string
}

export const ContactUs = (props: ContactUsPropsType) => {
    return (
        <li>
            <a href={props.href}>{props.title}</a>
        </li>
    );
};
