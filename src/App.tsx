import React from 'react';
import './App.css';
import {Navbar} from "./components/navbar/navbar";
import {Route, Routes} from "react-router-dom";
import {Home} from "./components/home/Home";
import {About} from "./components/about/About";


function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/about'} element={<About/>}/>
            </Routes>
        </>
    );
}

export default App;
