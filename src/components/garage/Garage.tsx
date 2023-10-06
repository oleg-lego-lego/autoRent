import React, {useEffect} from 'react';
import {CollapsibleTable} from "../login_account/TableBookCar";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {TemplatePage} from "../TemplatePage";
import {PATH} from "../../App";
import parkingEmpty from "../../images/garage/parkingEmpty.png"
import {HeroPages} from "../HeroPages";
import {carsApi} from "../../api/cars-api";
import {bookCarAdd} from "../../app/reducer/bookCar-reducer";

export const Garage = () => {
    const dispatch = useAppDispatch()

    const header = "You didn't rent a car"
    const description = 'Please choose the car you like!';

    const bookCarList = useAppSelector(state => state.bookCar.bookCar)

    useEffect(() => {
        carsApi.getBookCar()
            .then(res => {
                dispatch(bookCarAdd(res.data))
            })
    }, [dispatch])

    return (
        <>
            <HeroPages name={'Garage'}/>
            <div className="container">
                {bookCarList.length
                    ? <CollapsibleTable/>
                    : <TemplatePage
                        header={header}
                        description={description}
                        linkTitle={'Go to rent Car...'}
                        path={PATH.MODELS}
                        linkClassName={'favorites--empty-link'}
                        img={parkingEmpty}
                        imgDescription={'parking empty'}
                        imgClassName={'notCarOrder_img'}/>
                }
            </div>
        </>
    );
};
