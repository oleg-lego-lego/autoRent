import React from 'react';
import './App.css';
import {Navbar} from "./components/navbar/navbar";
import {Route, Routes} from "react-router-dom";
import {Home} from "./components/home/Home";
import {About} from "./pages/About";
import {Models} from "./pages/Models";
import {CommentPage} from "./pages/СommentPage";
import {Contact} from "./pages/Contact";
import {Favorites} from "./pages/Favotites";

export enum PATH {
    HOME = '/',
    ABOUT = '/about',
    MODELS = '/models',
    COMMENT = '/comment',
    CONTACT = '/contact',
    FAVORITES = '/favorites'
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
            </Routes>
        </>
    );
}

export default App;
