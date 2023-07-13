import React, {ChangeEvent, useEffect, useState} from 'react';
import CarAudi from "../../../images/cars-big/audia1.jpg";
import CarGolf from "../../../images/cars-big/golf6.jpg";
import CarToyota from "../../../images/cars-big/toyota-corolla.jpg";
import CarBmw from "../../../images/cars-big/bmw320.jpg";
import CarMercedes from "../../../images/cars-big/benz.jpg";
import CarPassat from "../../../images/cars-big/passatcc.jpg";

export const BookCar = () => {
    const [modal, setModal] = useState(false); //  class - active-modal

    // booking car
    const [carType, setCarType] = useState("");
    const [pickTime, setPickTime] = useState("");
    const [dropTime, setDropTime] = useState("");
    const [carImg, setCarImg] = useState("");

    // modal infos
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");

    const [c, cSet] = useState([{}])

    const orderCar = (name: string, lastName: string, phone: string, age: string) => {
        cSet([...c, {name, lastName, phone, age}])
        console.log({name, lastName, phone, age})
    }

    // taking value of modal inputs
    const handleName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleLastName = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };

    const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    };

    const handleAge = (e: ChangeEvent<HTMLInputElement>) => {
        setAge(e.target.value);
    };

    // open modal when all inputs are fulfilled
    const openModal = (e: React.MouseEvent) => {
        e.preventDefault();
        const errorMsg = document.querySelector(".error-message");
        if (
            pickTime === "" ||
            dropTime === "" ||
            carType === ""
        ) {
            // errorMsg && errorMsg.style.display = "flex";
        } else {
            setModal(!modal);
            const modalDiv = document.querySelector(".booking-modal");
            modalDiv && modalDiv.scroll(0, 0);
            // errorMsg && errorMsg.style.display = "none";
        }
    };

    // disable page scroll when modal is displayed
    useEffect(() => {
        if (modal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [modal]);

    // confirm modal booking
    const confirmBooking = (e: React.MouseEvent) => {
        // e.preventDefault();
        // setModal(!modal);
        // const doneMsg = document.querySelector(".booking-done");
        // doneMsg.style.display = "flex";
    };

    // taking value of booking inputs
    const handleCar = (e: ChangeEvent<HTMLSelectElement>) => {
        setCarType(e.target.value);
        setCarImg(e.target.value);
    };

    const handlePickTime = (e: ChangeEvent<HTMLInputElement>) => {
        setPickTime(e.target.value);
    };

    const handleDropTime = (e: ChangeEvent<HTMLInputElement>) => {
        setDropTime(e.target.value);
    };

    // based on value name show car img
    let imgUrl;
    switch (carImg) {
        case "Audi A1 S-Line":
            imgUrl = CarAudi;
            break;
        case "VW Golf 6":
            imgUrl = CarGolf;
            break;
        case "Toyota Corolla":
            imgUrl = CarToyota;
            break;
        case "BMW 320":
            imgUrl = CarBmw;
            break;
        case "Mercedes-Benz GLK":
            imgUrl = CarMercedes;
            break;
        case "VW Passat CC":
            imgUrl = CarPassat;
            break;
        default:
            imgUrl = "";
    }

    // hide message
    const hideMessage = () => {
        const doneMsg = document.querySelector(".booking-done");
        // doneMsg.style.display = "none";
    };

    return (
        <>
            <section id="booking-section" className="book-section">
                {/* overlay */}
                <div
                    onClick={openModal}
                    className={`modal-overlay ${modal ? "active-modal" : ""}`}
                ></div>

                <div className="container">
                    <div className="book-content">
                        <div className="book-content__box">
                            <h2>Book a car</h2>

                            <p className="error-message">
                                All fields required! <i className="fa-solid fa-xmark"></i>
                            </p>

                            <p className="booking-done">
                                Check your email to confirm an order.{" "}
                                <i onClick={hideMessage} className="fa-solid fa-xmark"></i>
                            </p>

                            <form className="box-form">
                                <div className="box-form__car-type">
                                    <label>
                                        Select Your Car Type
                                        <b>*</b>
                                    </label>
                                    <select value={carType} onChange={handleCar}>
                                        <option>Select your car type</option>
                                        <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                                        <option value="VW Golf 6">VW Golf 6</option>
                                        <option value="Toyota Corolla">Toyota Corolla</option>
                                        <option value="BMW 320">BMW 320</option>
                                        <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                                        <option value="VW Passat CC">VW Passat CC</option>
                                    </select>
                                </div>

                                <div className="box-form__car-time">
                                    <label htmlFor="picktime">
                                        Pick-up
                                        <b>*</b>
                                    </label>
                                    <input
                                        id="picktime"
                                        value={pickTime}
                                        onChange={handlePickTime}
                                        type="date"
                                    ></input>
                                </div>

                                <div className="box-form__car-time">
                                    <label htmlFor="droptime">
                                        Drop-of
                                        <b>*</b>
                                    </label>
                                    <input
                                        id="droptime"
                                        value={dropTime}
                                        onChange={handleDropTime}
                                        type="date"
                                    ></input>
                                </div>

                                <button onClick={openModal} type="submit">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* modal ------------------------------------ */}

            <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
                {/* title */}
                <div className="booking-modal__title">
                    <h2>Complete Reservation</h2>
                    <i onClick={openModal} className="fa-solid fa-xmark"></i>
                </div>
                {/* message */}
                <div className="booking-modal__message">
                    <h4>
                        Upon completing this reservation enquiry, you will receive:
                    </h4>
                    <p>
                        Your rental voucher to produce on arrival at the rental desk and a
                        toll-free customer support number.
                    </p>
                </div>
                {/* car info */}
                <div className="booking-modal__car-info">
                    <div className="dates-div">
                        <div className="booking-modal__car-info__dates">
                            <h5>Rent a car for a date</h5>
                            <span>
                            <div>
                                  <h6>Pick-Up Date</h6>
                                  <p>{pickTime}</p>
                            </div>
                            </span>
                        </div>

                        <div className="booking-modal__car-info__dates">
                            <span>
                                <div>
                                    <h6>Drop-Off Date</h6>
                                    <p>{dropTime}</p>
                                </div>
                            </span>
                        </div>
                    </div>

                    <div className="booking-modal__car-info__model">
                        <h5>
                            <span>Car -</span> {carType}
                        </h5>
                        {imgUrl && <img src={imgUrl} alt="car_img"/>}
                    </div>
                </div>
                {/* personal info */}
                <div className="booking-modal__person-info">
                    <h4>Personal Information</h4>
                    <form className="info-form">
                        <div className="info-form__2col">
                            <span>
                                <label>
                                  First Name <b>*</b>
                                </label>
                                <input
                                    value={name}
                                    onChange={handleName}
                                    type="text"
                                    placeholder="Enter your first name"
                                ></input>
                            </span>

                            <span>
                                <label>
                                  Last Name <b>*</b>
                                </label>
                                <input
                                    value={lastName}
                                    onChange={handleLastName}
                                    type="text"
                                    placeholder="Enter your last name"
                                ></input>
                            </span>

                            <span>
                                <label>
                                  Phone Number <b>*</b>
                                </label>
                                <input
                                    value={phone}
                                    onChange={handlePhone}
                                    type="tel"
                                    placeholder="Enter your phone number"
                                ></input>
                            </span>

                            <span>
                                <label>
                                  Age <b>*</b>
                                </label>
                                <input
                                    value={age}
                                    onChange={handleAge}
                                    type="number"
                                    placeholder="18"
                                ></input>
                            </span>
                        </div>

                        <div className="reserve-button">
                            <button onClick={() => orderCar(name, lastName, phone, age)}>Reserve Now</button>
                        </div>
                    </form>
                    <button onClick={() => orderCar(name, lastName, phone, age)}>$</button> // fix button
                </div>
            </div>
        </>
    );
};
