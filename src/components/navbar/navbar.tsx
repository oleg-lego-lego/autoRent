import React from 'react';
import logo from "../../images/carLogo.png"
import {Link} from "react-router-dom";
import {NavbarLink} from "./NavbarLink";


export const Navbar = () => {
    return (
        <nav>
            <div className="navbar">
                <div className="navbar__img">
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                        <img src={logo} alt={'logo'}/>
                    </Link>
                </div>
                <ul className="navbar__links">
                    <NavbarLink title={'Home'} to={'/'} className={'home-link'}/>
                    <NavbarLink title={'About'} to={'/about'} className={'about-link'}/>
                    <NavbarLink title={'Vehicle Models'} to={'/models'} className={'models-link'}/>
                    <NavbarLink title={'Comment'} to={'/testimonials'} className={'test-link'}/>
                    <NavbarLink title={'Our Team'} to={'/team'} className={'team-l ink'}/>
                    <NavbarLink title={'Contact'} to={'/contact'} className={'contact-link'}/>
                </ul>
            </div>


            {/*<nav>*/}
            {/*    /!* mobile *!/*/}
            {/*    <div className={`mobile-navbar`}>*/}
            {/*        <div className="mobile-navbar__close">*/}
            {/*            <i className="fa-solid fa-xmark"></i>*/}
            {/*        </div>*/}
            {/*        <ul className="mobile-navbar__links">*/}
            {/*            <li>*/}
            {/*                <Link to="/">*/}
            {/*                    Home*/}
            {/*                </Link>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                <Link to="/about">*/}
            {/*                    about*/}
            {/*                </Link>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                <Link to="/models">*/}
            {/*                    Models*/}
            {/*                </Link>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                <Link to="/testimonials">*/}
            {/*                    Testimonials*/}
            {/*                </Link>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                <Link to="/team">*/}
            {/*                    Our Team*/}
            {/*                </Link>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                <Link to="/contact">*/}
            {/*                    Contact*/}
            {/*                </Link>*/}
            {/*            </li>*/}
            {/*        </ul>*/}
            {/*    </div>*/}

            {/*    /!* desktop *!/*/}

            {/*    <div className="navbar">*/}
            {/*        <div className="navbar__img">*/}
            {/*            <Link to="/" onClick={() => window.scrollTo(0, 0)}>*/}
            {/*                <img alt="logo-img"/>*/}
            {/*            </Link>*/}
            {/*        </div>*/}
            {/*        <ul className="navbar__links">*/}
            {/*            <li>*/}
            {/*                <Link className="home-link" to="/">*/}
            {/*                    Home*/}
            {/*                </Link>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                {" "}*/}
            {/*                <Link className="about-link" to="/about">*/}
            {/*                    about*/}
            {/*                </Link>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                {" "}*/}
            {/*                <Link className="models-link" to="/models">*/}
            {/*                    Vehicle Models*/}
            {/*                </Link>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                {" "}*/}
            {/*                <Link className="testi-link" to="/testimonials">*/}
            {/*                    Testimonials*/}
            {/*                </Link>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                {" "}*/}
            {/*                <Link className="team-link" to="/team">*/}
            {/*                    Our Team*/}
            {/*                </Link>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                {" "}*/}
            {/*                <Link className="contact-link" to="/contact">*/}
            {/*                    Contact*/}
            {/*                </Link>*/}
            {/*            </li>*/}
            {/*        </ul>*/}

            {/*        <div className="navbar__buttons">*/}
            {/*            <Link className="navbar__buttons__sign-in" to="/">*/}
            {/*                Sign In*/}
            {/*            </Link>*/}
            {/*            <Link className="navbar__buttons__register" to="/">*/}
            {/*                Register*/}
            {/*            </Link>*/}
            {/*        </div>*/}

            {/*        /!* mobile *!/*/}
            {/*        <div className="mobile-hamb">*/}
            {/*            <i className="fa-solid fa-bars"></i>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</nav>*/}
        </nav>


    );
};

