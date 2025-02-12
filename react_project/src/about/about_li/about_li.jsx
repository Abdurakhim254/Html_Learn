import React from "react";
import "./about_li.css";

export const AboutLi = ({ text }) => {
    return (
        <div className="about__list">
            <div className="about__list_first_item">{text}</div>
            <div className="about__list_items">
                <h3>Track company-wide progress</h3>
                <p>
                    See how your day-to-day tasks fit into the wider vision. Go from
                    tracking progress at the milestone level all the way down to the smallest
                    of details. Never lose sight of the bigger picture again.
                </p>
            </div>
        </div>
    );
};
