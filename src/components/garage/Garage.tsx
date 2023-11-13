import React, {useEffect} from 'react';
import {TableBookCar} from "../login_account/TableBookCar";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {TemplatePage} from "../TemplatePage";
import parkingEmpty from "../../images/garage/parkingEmpty.png"
import {HeroPages} from "../HeroPages";
import {fetchBookCarAdd} from "../../app/reducer/bookCar-reducer";
import {PATH} from "../../PATH/PATH";

export const Garage = () => {
    const dispatch = useAppDispatch()

    const header = "You didn't rent a car"
    const description = 'Please choose the car you like!';

    const bookCarList = useAppSelector(state => state.bookCar.bookCar)
    const email = useAppSelector(state => state.auth.auth)

    const checkEmail = email.map(el => el.email).join('')
    const checkBookUser = bookCarList.filter(el => el.email === checkEmail)

    useEffect(() => {
        dispatch(fetchBookCarAdd())
    }, [dispatch])

    return (
        <>
            <HeroPages name={'Garage'}/>
            <div className="container">
                {checkBookUser.length
                    ? <TableBookCar checkBookUser={checkBookUser}/>
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
