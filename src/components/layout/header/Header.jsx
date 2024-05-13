import React, { useEffect, useState } from "react";
import img from "../../../assets/images/nav-img.svg";
import "./header.scss";
import bars from "../../../assets/images/bars-solid.svg";
import Form from "../../form/Form";
import axios from "../../../api";

function Header() {
  const [value, setValue] = useState("");
  const [product, setProduct] = useState(null);
  const [showlist, setShowlist] = useState(false);

  useEffect(() => {
    if (!value.trim()) return;
    axios
      .get(`/products/search?q=${value.trim()}`)
      .then((res) => setProduct(res.data.products))
      .catch((err) => console.log(err));
  }, [value]);

  return (
    <header className="header">
      <nav className="navbar container">
        <ul className={`navbar__item ${showlist ? "navbar__show" : ""}`}>
          <li className="navbar__item__list">
            <a href="#" className="navbar__item__link">
              Home
            </a>
          </li>
          <li className="navbar__item__list">
            <a href="#" className="navbar__item__link">
              Shop All
            </a>
          </li>
          <li className="navbar__item__list">
            <a href="#" className="navbar__item__link">
              Blog
            </a>
          </li>
          <li className="navbar__item__list">
            <a href="#" className="navbar__item__link">
              About Us
            </a>
          </li>
          <li
            onClick={() => setShowlist(false)}
            className="navbar__item__close"
          >
            x
          </li>
        </ul>
        <div className="navbar__icon">
          <a href="#">
            <img src={img} alt="" />
          </a>
        </div>
        <div className="form" action="">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search Product"
            type="text"
            name=""
            id=""
          />
          {value.trim() ? <Form product={product} /> : <></>}
          <button
            onClick={(event) => {
              event.preventDefault();
              setShowlist(true);
            }}
            className="navbar__hamburger"
          >
            <img src={bars} alt="" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
