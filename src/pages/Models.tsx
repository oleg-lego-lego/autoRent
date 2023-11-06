import React from 'react';
import {HeroPages} from "../components/HeroPages";
import {Model} from "../components/Model";
import {useAppSelector} from "../hooks/redux";
import {CarCardSkeleton} from "../components/skeleton/CarCardSreleton";


export const Models = () => {
    const carModels = useAppSelector(state => state.carModels.items)

    const carCards = [1, 2, 3, 4, 5, 6].map(el => <CarCardSkeleton key={el}/>)
    const modelCars = carModels.map(el => <Model model={el} key={el.id}/>)

    return (
        <section>
            <HeroPages name={'Car Models'}/>
            <div className="container">
                <div className="models-div">
                    {!carModels.length ? carCards : modelCars}
                </div>
            </div>
        </section>
    );
};
