import React from "react";
import "./customers.css"
import { Customer_li } from "./customer_li/customer_li";

export const Customers = () => {
    return (
        <section className="Customers">
            <div className="Customers__title">
                <h3>What they’ve said</h3>
            </div>
            <div className="Customers__intro">
                <Customer_li/>
                <Customer_li/>
            </div>
            <div className="header__nav_link customer__link">
                <a href="#" className="header__nav_link_a">Get Started</a>
            </div>
        </section>
    )
}