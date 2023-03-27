import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props.product);
  const { category, img, name, price, ratings, seller } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <h6 className="product-name">{name}</h6>
      <div className="product-info">
        <p>Price ${price}</p>
        <p>Manufacturer {seller}</p>
        <p>Rating: {ratings} star</p>
      </div>
      <button className="btn-add-to-cart">Add to Cart</button>
    </div>
  );
};

export default Product;
