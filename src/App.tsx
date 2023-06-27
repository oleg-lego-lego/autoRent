import React from 'react';
import './App.css';
import {Navbar} from "./components/navbar/navbar";
import {Route, Routes} from "react-router-dom";
import {Home} from "./components/home/Home";
import {About} from "./pages/about/About";
import {Models} from "./pages/models/Models";
import {CommentPage} from "./pages/СommentPage";
import {Contact} from "./pages/Contact";


function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/models'} element={<Models/>}/>
                <Route path={'/comment'} element={<CommentPage/>}/>
                <Route path={'/contact'} element={<Contact/>}/>
            </Routes>
        </>
    );
}

export default App;
