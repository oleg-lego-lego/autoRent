import React from 'react';
import notFound from "../../images/notFound.png";
import {TemplatePage} from "../TemplatePage";
import {HeroPages} from "../HeroPages";
import {PATH} from "../../PATH/PATH";

export const NotFound = () => {
    const header = 'Web page not found.';
    const description = 'It looks like the page you are looking for has disappeared! go to page...';

    return (
        <>
            <HeroPages name={'Favorites'}/>
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
        </>

    );
};

