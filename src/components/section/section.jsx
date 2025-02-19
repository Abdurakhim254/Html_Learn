import React from "react";
import { Sectioncard } from "./components/section_component";
import { sectionlist } from "../../config/Section.js";
import "./section.css";

export const Hero = () => {


    return (
        <>
            <section className="hero">
                <div className="hero__intro">
                    <div className="hero__intro__title">
                        <h3>Browse The Range</h3>
                    </div>
                    <div className="hero__intro__paragraph">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="hero__card">
                    {sectionlist.map((item) => <Sectioncard img={item.img} title={item.title} key={item.title} />)}
                </div>
            </section>
        </>
    );
};