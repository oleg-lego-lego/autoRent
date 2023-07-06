import React from 'react';
import {Model} from "../components/Model";
import {HeroPages} from "../components/HeroPages";
import {useAppSelector} from "../hooks/redux";
import {FavoritesEmpty} from "../components/favorites/FavoritesEmpty";


export const Favorites = () => {
    const carModel = useAppSelector(state => state.carModels.items)
    const carModelFavorites = carModel.filter(el => el.favorites !== false)

    return (
        <>
            <section className="models-section">
                <HeroPages name={'Favorites'}/>
                <div className="container">
                    {!carModelFavorites.length && < FavoritesEmpty/>}
                    {!!carModelFavorites.length &&
                        <div className="models-div">
                            {!!carModelFavorites.length &&
                                carModelFavorites.map(el => {
                                    return (
                                        <Model model={el} key={el.id}/>
                                    )
                                })
                            }
                        </div>}
                </div>
            </section>

        </>

    );
};
