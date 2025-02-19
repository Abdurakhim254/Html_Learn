import React from "react";
import { FooterComponent } from "./components/footer_component";
import {footerlist} from "../../config/footer.js"
import "./footer.css"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__title">
                <h3>Our Products</h3>
            </div>
            <div className="footer__cards">
            
            </div>
        </footer>
    );
};