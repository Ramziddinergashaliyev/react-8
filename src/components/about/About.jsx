import React from "react";
import img from "../../assets/images/about-img.svg";
import "./about.scss";

function About() {
  return (
    <section className="about container">
      <div className="about__top">
        <div className="about__top__card"></div>
        <p className="about__text">about us</p>
        <h2 className="about__title">
          If you’re looking for a Premium Quality Tempered Glass or Back-cover
          for your Device
        </h2>
        <h1 className="about__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. 
        </h1>
      </div>
      <div className="about__bottom">
        <img src={img} alt="" />
      </div>
    </section>
  );
}

export default About;
