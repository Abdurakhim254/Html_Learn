import React from "react";
import { About_li } from "./about_li/about_li";
import "./about.css"

export const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="about__intro">
                    <div className="about_intro_infos">
                        <div className="about_intro_infos_title">
                            <h3>What’s different about Manage?</h3>
                        </div>
                        <div className="about_intro_infos_p">
                            <p>Manage provides all the functionality
                                your team needs, without the complexity.
                                Our software is tailor-made for modern
                                digital product teams. </p>
                        </div>
                    </div>
                    <div className="about__intro_lists">
                      <About_li text="01" />
                      <About_li text="02"/>
                      <About_li text="03"/>
                    </div>
                </div>
            </div>
        </section>
    )
}