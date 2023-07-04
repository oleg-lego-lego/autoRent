import React, {useState} from 'react';
import {ButtonBox} from "./ButtonBox";

export const SelectCar = () => {
    const [active, setActive] = useState("SecondCar");
    const [colorBtn, setColorBtn] = useState("btn1");

    const buttonId = (id: string) => {
        setColorBtn(colorBtn === id ? "" : id);
    };

    const coloringButton = (id: string) => {
        return colorBtn === id ? "colored-button" : "";
    };

    const setActiveButton = (value: string) => {
        setActive(value)
        console.log(value)
    }

    return (
        <>
            <section className="pick-section">
                <div className="container">
                    <div className="pick-container">
                        <div className="pick-container__title">
                            <h3>Vehicle Models</h3>
                            <h2>Our rental fleet</h2>
                            <p>
                                Choose from a variety of our amazing vehicles to rent for your
                                next adventure or business trip
                            </p>
                        </div>
                        <div className="pick-container__car-content">
                            <div className="pick-box">
                                <ButtonBox
                                    title={'Audi A1 S-Line'}
                                    btnID={'btn1'}
                                    active={'SecondCar'}
                                    buttonId={buttonId}
                                    coloringButton={coloringButton}
                                    setActiveButton={setActiveButton}
                                />
                                <ButtonBox
                                    title={'VW Golf 6'}
                                    btnID={'btn2'}
                                    active={'FirstCar'}
                                    buttonId={buttonId}
                                    coloringButton={coloringButton}
                                    setActiveButton={setActiveButton}
                                />
                                <ButtonBox
                                    title={'Toyota Camry'}
                                    btnID={'btn3'}
                                    active={'ThirdCar'}
                                    buttonId={buttonId}
                                    coloringButton={coloringButton}
                                    setActiveButton={setActiveButton}
                                />
                                <ButtonBox
                                    title={'BMW 320 ModernLine'}
                                    btnID={'btn4'}
                                    active={'FourthCar'}
                                    buttonId={buttonId}
                                    coloringButton={coloringButton}
                                    setActiveButton={setActiveButton}
                                />
                                <ButtonBox
                                    title={'Mercedes-Benz GLK'}
                                    btnID={'btn5'}
                                    active={'FifthCar'}
                                    buttonId={buttonId}
                                    coloringButton={coloringButton}
                                    setActiveButton={setActiveButton}
                                />
                                <ButtonBox
                                    title={'VW Passat CC'}
                                    btnID={'btn6'}
                                    active={'SixthCar'}
                                    buttonId={buttonId}
                                    coloringButton={coloringButton}
                                    setActiveButton={setActiveButton}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
