import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Mainlayout } from "./Mainlayout/Mainlayout";
import { Hero } from "./components/section/section";
import { Mebel } from "./components/mebel/mebel";

export const App = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Mainlayout />}>
                <Route index element={<Hero/>} />
            </Route>
                <Route path="/mebel/:title" element={<Mebel />} />
        </Routes>
        </>
    );
};

export default App;
