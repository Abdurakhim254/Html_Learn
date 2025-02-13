import React from "react";
import header_img from "../assets/header_img.svg"
import footer_icons from "../assets/footer_icons.svg"
import "./footer.css"


export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__intro">
                    <div className="footer__intro_logos_and_icons">
                        <div className="footer__intro_logo">
                            <img src={header_img} alt="Img" />
                        </div>
                        <div className="footer__intro_icons">
                            <img src={footer_icons} alt="Img" />
                        </div>
                    </div>
                    <div className="footer__intro_lists">
                        <div className="footer__intro_lists_part_one">
                            <ul className="footer__intro_lists_li">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Products</a></li>
                                <li><a href="#">About us</a></li>
                            </ul>
                        </div>
                        <div className="footer__intro_lists_part_two">
                            <ul className="footer__intro_lists_li">
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Community</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__intro_last_part">
                        <div className="footer__last">
                            <div className="footer__intro_last_part_input">
                                <input type="text" name="" id="input" placeholder="Updates in your inbox"/>
                            </div>
                            <div className="footer__intro_last_part_link">
                                <a href="#">Go</a>
                            </div>
                        </div>
                        <div className="footer__intro_last_part_p">
                            <p>Copyright 2020. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}