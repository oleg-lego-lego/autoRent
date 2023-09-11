import React from 'react';
import './App.css';
import {Navbar} from "./components/navbar/navbar";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Models} from "./pages/Models";
import {CommentPage} from "./pages/СommentPage";
import {Contact} from "./pages/Contact";
import {Favorites} from "./pages/Favotites";
import {Banner} from "./components/Banner";
import {Footer} from "./components/Footer";
import {NotFound} from "./components/notFound/NotFound";
import {Login} from "./components/login_account/Login";
import {RegistrationPage} from "./components/passwordInput/RegistrationPage";
import {Garage} from "./components/garage/Garage";

export enum PATH {
    HOME = '/',
    ABOUT = '/about',
    MODELS = '/models',
    COMMENT = '/comment',
    CONTACT = '/contact',
    FAVORITES = '/favorites',
    NOT_FOUND = '*',
    LOGIN_ACCOUNT = '/account',
    LOGIN = '/login',
    REGISTRATION = '/registration',
    GARAGE = '/Garage'
}

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path={PATH.HOME} element={<Home/>}/>
                <Route path={PATH.ABOUT} element={<About/>}/>
                <Route path={PATH.MODELS} element={<Models/>}/>
                <Route path={PATH.COMMENT} element={<CommentPage/>}/>
                <Route path={PATH.CONTACT} element={<Contact/>}/>
                <Route path={PATH.FAVORITES} element={<Favorites/>}/>
                <Route path={PATH.NOT_FOUND} element={<NotFound/>}/>
                <Route path={PATH.LOGIN_ACCOUNT} element={<Login/>}/>
                <Route path={PATH.REGISTRATION} element={<RegistrationPage/>}/>
                <Route path={PATH.GARAGE} element={<Garage/>}/>
            </Routes>
            <Banner/>
            <Footer/>
        </>
    );
}

export default App;
