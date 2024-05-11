import React from "react";
import heroImg from "../../assets/images/hero-img.svg";
import "./hero.scss";

function Hero() {
  return (
    <section className="container">
      <div className="hero">
        <div className="hero__left">
          <h4 className="hero__left__desc">Mobile</h4>
          <h3 className="hero__left__text">Backcover</h3>
          <h2 className="hero__left__title">Tempered Glass</h2>
          <button className="hero__left__btn">Shop all !</button>
        </div>
        <div className="hero__right">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
