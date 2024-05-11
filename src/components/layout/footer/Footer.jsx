import React from "react";
import "./footer.scss";
import footerImg from "../../../assets/images/nav-img.svg";
import rasm1 from "../../../assets/images/foo1.svg";
import rasm2 from "../../../assets/images/foo2.svg";
import rasm3 from "../../../assets/images/foo3.svg";
import rasm4 from "../../../assets/images/foo4.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__rows container">
        <div>
          <img src={footerImg} alt="" />
          <p className="footer__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <ul className="footer__item">
          <li className="footer__list">
            <h2 className="footer__list__title">Contact us</h2>
          </li>
          <li className="footer__list">
            <a href="" className="footer__list__link">
              E: info@example.com 
            </a>
          </li>
          <li className="footer__list">
            <a href="" className="footer__list__list">
              P: +94 7670000000 
            </a>
          </li>
          <li className="footer__list">
            <a href="" className="footer__list__link">
              A: 123 Hospital rd, Kalubowila, Dehiwela
            </a>
          </li>
        </ul>

        <ul className="footer__item">
          <li className="footer__list">
            <h2 className="footer__list__title">Useful links</h2>
          </li>
          <li className="footer__list">
            <a href="" className="footer__list__link">
              Shop All
            </a>
          </li>
          <li className="footer__list">
            <a href="" className="footer__list__list">
              Tempered Glass
            </a>
          </li>
          <li className="footer__list">
            <a href="" className="footer__list__link">
              Back-cover
            </a>
          </li>
          <li className="footer__list">
            <a href="" className="footer__list__link">
              About us
            </a>
          </li>
        </ul>

        <div className="footer__mobile">
          <div className="footer__icon">
            <img src={rasm1} alt="" />
            <p className="footer__icon__desc">Whatsapp</p>
          </div>
          <div className="footer__icon">
            <img src={rasm2} alt="" />
            <p className="footer__icon__desc">Facebook</p>
          </div>
          <div className="footer__icon">
            <img src={rasm3} alt="" />
            <p className="footer__icon__desc">Instargram</p>
          </div>
          <div className="footer__icon">
            <img src={rasm4} alt="" />
            <p className="footer__icon__desc">Tik Tok</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
