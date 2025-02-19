import React from "react";

export const FooterComponent = ({ img, title, subtitle, price, saleprice }) => {
    return (
        <>
            <div className="component">
                <div className="component__img">
                    <img src={img} alt="Img" />
                </div>
                <div className="component__title">
                    <h3>{title}</h3>
                </div>
                <div className="component__subtitle">
                    <h3>{subtitle}</h3>
                </div>
                <div className="component__prices">
                    <div className="component__price">
                        <p>{price}</p>
                    </div>
                    <div className="component__saleprice">
                        <p>{saleprice}</p>
                    </div>
                </div>
            </div>
        </>
    );
};