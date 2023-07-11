import React from 'react';
import FavEmpty from "../../images/emptyFavotites.png"
import {PATH} from "../../App";
import {TemplatePage} from "../TemplatePage";

export const FavoritesEmpty = () => {
    const header = 'Cart of favorite cars is empty.';
    const description = 'You probably didn\'t choose a car.In order to take the car you like, go to page...';

    return (
        <>
            <TemplatePage
                header={header}
                description={description}
                linkTitle={'Car Models'}
                path={PATH.MODELS}
                linkClassName={'favorites--empty-link'}
                img={FavEmpty}
                imgDescription={'Empty favorites'}
                imgClassName={'FavEmpty_img'}
            />
        </>

    );
};

