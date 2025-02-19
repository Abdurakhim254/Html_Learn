import React from "react";

export const Sectioncard = ({img,title}) => {
    return (
        <div className="section__card">
            <div className="section__card__img">
                <img src={img} alt="Img" />
            </div>
            <div className="section__card__title">
                <p>{title}</p>
            </div>
        </div>
    )
}