import React from "react";
import { Navbar } from "./navbar/navbar";
import "./header.css";


export const Header = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <section className="header">
          <div className="header__content">
            <div className="header__content_infos">
              <div className="header__content_infos_text">
                <p>New Arrival</p>
              </div>
              <div className="header__content_infos_title">
                <h3>Discover Our New Collection</h3>
              </div>
              <div className="header__content_infos_paragraph">
                <p>Lorem ipsum dolor sit amet,
                   consectetur adipiscing elit. 
                   Ut elit tellus, luctus nec 
                   ullamcorper mattis.</p>
              </div>
              <div className="header__content_infos_button">
                <button>BUY NOW</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};