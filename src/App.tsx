import React, {useEffect} from 'react';
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
import {fetchGetCars} from "./app/reducer/carModels-reducer";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchGetUserInLogged} from "./app/reducer/auth-reducer";
import {Loading} from "./components/Loading";
import {ErrorSnackbar} from "./components/ErrorSnackBar";
import {PATH} from "./PATH/PATH";


function App() {
    const dispatch = useAppDispatch()

    const logoutValue = useAppSelector(state => state.auth.logoutValue)

    useEffect(() => {
        dispatch(fetchGetCars())
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchGetUserInLogged())
    }, [dispatch, logoutValue])

    const valueLogin = useAppSelector(state => state.auth.auth)
    const garageRedirect = valueLogin.map(el => el.redirectGarageValue).join('')

    return (
        <>
            <Navbar/>
            <Loading/>
            <Routes>
                <Route path={PATH.HOME} element={<Home/>}/>
                <Route path={PATH.ABOUT} element={<About/>}/>
                <Route path={PATH.MODELS} element={<Models/>}/>
                <Route path={PATH.COMMENT} element={<CommentPage/>}/>
                <Route path={PATH.CONTACT} element={<Contact/>}/>
                <Route path={PATH.FAVORITES} element={<Favorites/>}/>
                <Route path={PATH.NOT_FOUND} element={<NotFound/>}/>
                {!!garageRedirect ?
                    <Route path={PATH.GARAGE} element={<Garage/>}/>
                    :
                    <>
                        <Route path={PATH.LOGIN} element={<Login/>}/>
                        <Route path={PATH.REGISTRATION} element={<RegistrationPage/>}/>
                    </>
                }
            </Routes>
            <Banner/>
            <Footer/>
            <ErrorSnackbar/>
        </>
    );
}

export default App;
