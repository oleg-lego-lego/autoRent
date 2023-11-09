import React, {useEffect, useState} from 'react';
import BgShape from "../../../images/hero/hero-bg.png";
import HeroCar from "../../../images/hero/Pngtree—big red hand drawn vintage_4477760.png";
import {Link} from "react-router-dom";
import arrow from "../../../images/faq/angle-arrow-down_icon-icons.com_73683.png";
import {PATH} from "../../../PATH/PATH";


export const HomeHeader = () => {
    const [goUp, setGoUp] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({top: (0), behavior: "smooth"})
    }

    const bookBtn = (selector: string) => {
        const booking = document.querySelector(selector) as HTMLDivElement | null

        if (booking !== null) {
            booking.scrollIntoView({behavior: "smooth"})
        }
    }

    useEffect(() => {
        const onPageScroll = () => {
            document.documentElement.scrollTop > 600 ? setGoUp(true) : setGoUp(false)
        }

        window.addEventListener("scroll", onPageScroll)

        return () => {
            window.removeEventListener("scroll", onPageScroll)
        }
    }, []);

    return (
        <section id="home" className="home__header">
            <div className="container">
                <img className="bg-shape" src={BgShape} alt="bg-shape"/>
                <div className="home__content">
                    <div className="home__text">
                        <h4>Plan your trip now</h4>
                        <h1>
                            Save <span>big</span> with our car rental
                        </h1>
                        <p>
                            Rent the car of your dreams. Unbeatable prices, unlimited miles,
                            flexible pick-up options and much more.
                        </p>
                        <div className="home__btn">
                            <Link
                                onClick={() => bookBtn('#booking-section')}
                                className="home__btn__book-ride" to={PATH.HOME}
                            >
                                Book Ride
                            </Link>

                            <Link
                                onClick={() => bookBtn('#takeUs-section')}
                                className="home__btn__learn-more" to={PATH.HOME}
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <img src={HeroCar} alt="car-img" className="home__car-img"/>
                </div>
            </div>

            <div onClick={scrollToTop} className={`scroll-up ${goUp ? "show-scroll" : ""}`}>
                <img src={arrow} alt="стрелка"/>
            </div>
        </section>
    );
};

