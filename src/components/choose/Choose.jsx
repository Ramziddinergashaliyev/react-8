import React from "react";
import { CHOOSE } from "../static/productsData";
import "./choose.scss";

function Choose() {
  let chooseData = CHOOSE?.map((el) => (
    <div key={el.id} className="choose__card">
      <img src={el.img} alt="" />
      <h2 className="choose__title">{el.title}</h2>
      <p className="choose__desc">{el.desc}</p>
    </div>
  ));

  return (
    <section className="choose container">
      <div className="choose__top">
        <div className="choose__line"></div>
        <p className="choose__top__text">Why Choose US</p>
      </div>
      <div className="choose__cards">{chooseData}</div>
    </section>
  );
}

export default Choose;
