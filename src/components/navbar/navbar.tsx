import React from 'react';
import logo from "../../images/logo/carLogo.png"
import {Link} from "react-router-dom";
import {NavbarLink} from "./NavbarLink";
import {PATH} from "../../App";


export const Navbar = () => {
    return (
        <nav>
            <div className="navbar">
                <div className="navbar__img">
                    <Link to={'/'}>
                        <img src={logo} alt={'logo'}/>
                    </Link>
                </div>
                <ul className="navbar__links">
                    <NavbarLink title={'Home'} to={PATH.HOME}/>
                    <NavbarLink title={'About'} to={PATH.ABOUT}/>
                    <NavbarLink title={'Car Models'} to={PATH.MODELS}/>
                    <NavbarLink title={'Comment'} to={PATH.COMMENT}/>
                    <NavbarLink title={'Contact'} to={PATH.CONTACT}/>
                    <NavbarLink title={'Favorites'} to={PATH.FAVORITES}/>
                    <NavbarLink title={'Login'} to={PATH.LOGIN_ACCOUNT}/>
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

