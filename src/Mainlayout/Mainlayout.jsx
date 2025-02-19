import React from "react";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/footer";
import { Outlet } from "react-router-dom";

export const Mainlayout = ({ children }) => {
    return (
        <>
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </>
    )

}