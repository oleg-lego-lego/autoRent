import React, {useEffect, useState} from 'react';
import {Model} from "../components/model/Model";
import {HeroPages} from "../components/heroPages/HeroPages";
import {useAppSelector} from "../app/hooks/redux";
import {FavoritesEmpty} from "../components/favorites/FavoritesEmpty";
import {CarCardSkeleton} from "../components/skeleton/CarCardSreleton";


export const Favorites = () => {
    const [delayComplete, setDelayComplete] = useState(false)

    const carModel = useAppSelector(state => state.carModels.items)
    const carModelFavorites = carModel.filter(el => el.favorites !== false)

    useEffect(() => {
        const delay = setTimeout(() => {
            setDelayComplete(true);
        }, 3000);

        return () => clearTimeout(delay);
    }, [carModelFavorites]);

    const carCardsSkeleton = (
        <div className="models-div">
            {[1, 2].map(el => <CarCardSkeleton key={el}/>)}
        </div>
    )

    const carFavorites = (
        <div className="models-div">
            {carModelFavorites.map(el => (
                <Model model={el} key={el.id}/>
            ))}
        </div>
    )

    return (
        <>
            <HeroPages name={'Favorites'}/>
            <div className="container">
                {!delayComplete && carCardsSkeleton}

                {delayComplete && (
                    carModelFavorites.length
                        ? carFavorites
                        : <FavoritesEmpty/>
                )}
            </div>
        </>
    );
};
