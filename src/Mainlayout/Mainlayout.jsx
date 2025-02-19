import React from "react";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/footer";

export const Mainlayout = ({ children }) => {
    return (
        <>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </>
    )

}