import React, {useState} from 'react';
import {ButtonBox} from "./ButtonBox";
import {CarBox} from "./CarBox";
import {useAppSelector} from "../../hooks/redux";
import {SkeletonForHome} from "../skeleton/SkeletonForHome";

export const SelectCar = () => {
    const carModels = useAppSelector(state => state.carModels.items)
    const [active, setActive] = useState('0');

    const coloringButton = (id: string) => {
        return active === id ? "colored-button" : "";
    };

    const setActiveButton = (id: string) => {
        setActive(id)
    }

    const carList = carModels.filter(el => el.id === active)

    return (
        <section className="selectCar__section">
            <div className="container">
                <div className="selectCar__container">
                    <div className="selectCar__title">
                        <h3>Vehicle Models</h3>
                        <h2>Our rental fleet</h2>
                        <p>
                            Choose from a variety of our amazing vehicles to rent for your
                            next adventure or business trip
                        </p>
                    </div>

                    {!carModels.length ?
                        <SkeletonForHome/>
                        :
                        <div className="selectCar__content">
                            <div className="selectCar__box">
                                {carModels.map(el => (
                                    <ButtonBox
                                        data={el}
                                        coloringButton={coloringButton}
                                        setActiveButton={setActiveButton}
                                        key={el.id}
                                    />
                                ))}
                            </div>
                            {carList.map(el => {
                                return (
                                    <CarBox data={el} key={el.id}/>
                                )
                            })}
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};
