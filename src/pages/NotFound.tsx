import React from 'react';
import notFound from "../images/notFound/notFound.png";
import {TemplatePage} from "../components/notFound/TemplatePage";
import {HeroPages} from "../components/heroPages/HeroPages";
import {PATH} from "../app/PATH/PATH";

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

