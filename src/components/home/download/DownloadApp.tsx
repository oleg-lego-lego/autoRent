import React from 'react';

type DownloadAppPropsType = {
    hrefApp: string
    img: string
}

export const DownloadApp = (props: DownloadAppPropsType) => {
    return (
        <a href={props.hrefApp} target={'_blank'} rel="noreferrer">
            <img src={props.img} alt="download_img"/>
        </a>
    );
};
