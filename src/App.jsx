import React, { Fragment } from "react";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import About from "./components/about/About";
import Shop from "./components/shop/Shop";
import Choose from "./components/choose/Choose";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Products />
      <About />
      <Shop />
      <Choose />
      <Footer />
    </Fragment>
  );
}

export default App;
