import React from 'react';
import {PATH} from "../../App";
import notFound from "../../images/notFound.png";
import {TemplatePage} from "../TemplatePage";

export const NotFound = () => {
    const header = 'Web page not found.';
    const description = 'It looks like the page you are looking for has disappeared! go to page...';

    return (
        <TemplatePage
            header={header}
            description={description}
            linkTitle={'Home'}
            path={PATH.HOME}
            linkClassName={'favorites--empty-link'}
            img={notFound}
            imgDescription={'Empty favorites'}
            imgClassName={'notFound_img'}
        />
    );
};

