import React from "react";
import logo from "../../../assets/logo.svg"
import icon1 from "../../../assets/icon1.svg"
import icon2 from "../../../assets/icon2.svg"
import icon3 from "../../../assets/icon3.svg"
import icon4 from "../../../assets/icon4.svg"
import "./navbar.css"

export const Navbar=() => {
    return (
        <>
        <nav className="nav">
            <div className="nav__logo">
                <img src={logo} alt="Img" />
            </div>
            <div className="nav__links">
                <ul className="nav__list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="nav__icons">
                <ul className="nav__icons-list">
                    <li><a href="#"><img src={icon1} alt="Icon" /></a></li>
                    <li><a href="#"><img src={icon2} alt="Icon" /></a></li>
                    <li><a href="#"><img src={icon3} alt="Icon" /></a></li>
                    <li><a href="#"><img src={icon4} alt="Icon" /></a></li>
                </ul>
            </div>
        </nav>
        </>
    );
}