import React, { useEffect, useState } from "react";
import axios from "../../api";
import "./products.scss";

function Products() {
  const [product, setProduct] = useState(null);
  let perPageCount = 4;

  useEffect(() => {
    axios
      .get(`/products`, {
        params: {
          limit: perPageCount,
        },
      })
      .then((res) => setProduct(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  console.log(product);
  const productData = product?.map((el) => (
    <div key={el.id} className="products__card">
      <div className="products__img">
        <img src={el.images[0]} alt="" />
      </div>
      <div className="products__info">
        <h2 className="products__info__title">{el.title}</h2>
        <p className="products__info__desc">{el.price}</p>
      </div>
    </div>
  ));

  return (
    <section className="products container">
      <div className="products__cards">{productData}</div>
    </section>
  );
}

export default Products;
