import React from 'react';
import {HeroPages} from "../components/heroPages/HeroPages";
import {Model} from "../components/model/Model";
import {useAppSelector} from "../app/hooks/redux";
import {CarCardSkeleton} from "../components/skeleton/CarCardSreleton";


export const Models = () => {
    const carModels = useAppSelector(state => state.carModels.items)

    const carCards = [1, 2, 3].map(el => <CarCardSkeleton key={el}/>)
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
