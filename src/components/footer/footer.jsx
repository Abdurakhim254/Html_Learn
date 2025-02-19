import React from "react";
import { FooterComponent } from "./components/footer_component";
import { footerlist } from "../../config/footer.js";
import { Link } from "react-router-dom";
import "./footer.css";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__title">
                <h3>Our Products</h3>
            </div>
            <div className="footer__cards">
                {footerlist.map((item) => (
                    <Link key={item.title} to={`/mebel/${item.title}`}>
                        <FooterComponent
                            img={item.img}
                            title={item.title}
                            subtitle={item.subtitle}
                            price={item.price}
                            saleprice={item.saleprice}
                        />
                    </Link>
                ))}
            </div>
        </footer>
    );
};
