import React, {useEffect} from 'react';
import {HeroPages} from "../components/HeroPages";
import {Model} from "../components/Model";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {carsApi} from "../api/cars-api";
import {getCars} from "../app/reducer/carModels-reducer";


export const Models = () => {
    const dispatch = useAppDispatch()
    const carModels = useAppSelector(state => state.carModels.items)

    useEffect(() => {
        carsApi.getCars()
            .then((res) => {
                dispatch(getCars(res.data))
            })
    }, [dispatch])

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
