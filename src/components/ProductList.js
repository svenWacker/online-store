import React, { useState, useContext } from "react";
import ProductItem from "./ProductItem";
import { StoreContext } from "../context";

const ProductList = ({ userInput }) => {
  const store = useContext(StoreContext);
  const [totalBill, setTotalBill] = useState(0);

  const check = store.lookUp(userInput);
  const items = check.map((item, i) => (
    <ProductItem key={i} info={item} addToCart={store.addToCart} />
  ));

  return (
    <React.Fragment>
      <div className="header">
        <button className="totalB" onClick={() => setTotalBill(store.bill())}>
          Total bill
        </button>{" "}
        <h2>{totalBill}€</h2>
      </div>
      <ul>{items}</ul>
    </React.Fragment>
  );
};
export default ProductList;
