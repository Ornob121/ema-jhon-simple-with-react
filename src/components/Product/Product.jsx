import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { img, name, price, ratings, seller } = props.product;
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className="product">
      <img src={img} alt="" />
      <h6 className="product-name">{name}</h6>
      <div className="product-info">
        <p>Price ${price}</p>
        <p>Manufacturer {seller}</p>
        <p>Rating: {ratings} star</p>
      </div>
      <button
        onClick={() => handleAddToCart(props.product)}
        className="btn-add-to-cart"
      >
        Add to Cart
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
