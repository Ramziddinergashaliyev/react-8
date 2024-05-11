import React from "react";

function Form({ product }) {
  console.log(product);
  let formSerch = product?.map((el) => <p>{el.title}</p>);
  return (
    <div className="form__result">
      {/* {!product.length ? <p>Malumot topilmadi</p> : <></>} */}
      {formSerch}
    </div>
  );
}

export default Form;
