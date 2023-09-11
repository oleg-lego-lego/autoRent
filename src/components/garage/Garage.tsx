import React from 'react';
import {CollapsibleTable} from "../login_account/TableBookCar";
import {useAppSelector} from "../../hooks/redux";
import {TemplatePage} from "../TemplatePage";
import {PATH} from "../../App";
import parkingEmpty from "../../images/garage/parkingEmpty.png"

export const Garage = () => {
    const bookCarList = useAppSelector(state => state.bookCar.bookCar)

    const header = "You didn't rent a car"
    const description = 'Please choose the car you like!';

    return (
        <div className="container">
            <div className="favorites-section">
                <div className="favorites--empty">
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
            </div>
        </div>
    );
};
