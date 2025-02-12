import React from "react";
import header_img from "../assets/header_img.svg"
import header_intro_img from "../assets/header_intro_img.svg"

import './header.css'

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <div className="header__nav_logo">
                        <img src={header_img} alt="Img" />
                    </div>
                    <div className="header__nav_list">
                        <ul className="header__nav_list_li">
                            <li ><a href="#"> Pricing</a></li>
                            <li ><a href="#"> Product</a></li>
                            <li ><a href="#"> About Us</a></li>
                            <li ><a href="#"> Careers</a></li>
                            <li ><a href="#"> Community</a></li>
                        </ul>
                    </div>
                    <div className="header__nav_link">
                        <a href="#" className="header__nav_link_a">Get Started</a>
                    </div>
                </nav>
                    <div className="header__intro">
                        <div className="header__intro_infos">
                            <div className="header__intro_infos_title">
                                <h3>Bring everyone
                                    together to build
                                    better products.</h3>
                            </div>
                            <div className="header__intro_infos_p">
                                <p>Manage makes it simple 
                                    for software teams to plan
                                     day-to-day tasks while keeping 
                                     the larger team goals in view.</p>
                            </div>
                            <div className="header__nav_link">
                                <a href="#" className="header__nav_link_a">Get Started</a>
                            </div>
                        </div>
                        <div className="header__intro_img">
                            <img src={header_intro_img} alt="Img" />
                        </div>
                    </div>
            </div>
        </header>
    )
}