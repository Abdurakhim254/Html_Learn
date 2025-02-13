
import React from "react";
import "./customer_li.css"
import customer_img from "../../assets/customer_img.svg"


export const Customer_li = () => {
    return (
        <div className="customer__list">
            <div className="customer__list_img">
                <img src={customer_img} alt="Img" />
            </div>
            <div className="customer__list_name">
                <h3>Anisha Li</h3>
            </div>
            <div className="customer__list_p">
                <p>  “Manage has supercharged our team’s workflow.
                     The ability to maintain visibility on larger
                      milestones at all times keeps everyone motivated.”</p>
            </div>
        </div>
    )
}