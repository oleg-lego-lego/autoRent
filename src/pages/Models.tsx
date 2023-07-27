import React from 'react';
import {HeroPages} from "../components/HeroPages";
import {Model} from "../components/Model";
import {useAppSelector} from "../hooks/redux";


export const Models = () => {
    const carModels = useAppSelector(state => state.carModels.items)

    return (
        <section>
            <HeroPages name={'Car Models'}/>
            <div className="container">
                <div className="models-div">
                    {carModels.map(el => {
                        return (
                            <Model model={el} key={el.id}/>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};
