import React from 'react';
import './App.css';
import {Navbar} from "./components/navbar/navbar";
import {Route, Routes} from "react-router-dom";
import {Home} from "./components/home/Home";
import {About} from "./pages/about/About";
import {Models} from "./pages/models/Models";


function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/models'} element={<Models/>}/>
            </Routes>
        </>
    );
}

export default App;
