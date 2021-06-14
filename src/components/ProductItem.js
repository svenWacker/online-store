import React from "react";
import { FcShare, FcRating, FcHighPriority } from "react-icons/fc";

const ProductItem = ({ info, addToCart }) => {
  const { id, productName, icon, price, inventory } = info;

  return (
    <li key={id}>
      {productName} <i>{icon}</i>
      <h5>{price}€</h5>
      <h6>{inventory} items in stock</h6>
      <button
        disabled={inventory === 0}
        onClick={() => {
          console.log(info);
          addToCart(info);
        }}
      >
        {inventory > 0 ? "Add to cart" : "Sold out"}
      </button>
      <br />
      <button className="social">
        <FcRating />
      </button>
      <button className="social">
        <FcHighPriority />
      </button>
      <button className="social">
        <FcShare />
      </button>
    </li>
  );
};

export default ProductItem;
