import React from "react";
import { Mainlayout } from "./Mainlayout/Mainlayout";
import { Hero } from "./components/section/section";


export const App = () => {
    return (
        <>
            <Mainlayout>
            <Hero />
            </Mainlayout>
        </>
    )
}


export default App