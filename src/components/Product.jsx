import React from "react";

function Product({ lable, img, title, price }) {
  return (
    <article>
      <span>{lable}</span>
      <img src={img} alt="" />
      <p>{title}</p>
      <h4>{price}$</h4>
    </article>
  );
}

export default Product;
