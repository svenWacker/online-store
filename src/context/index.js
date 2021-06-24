import React from "react";
import Data from "../data.json";

const Store = {
  data: Data,
  cart: [],
  bill: function () {
    return Store.cart.reduce((acc, cur) => acc + cur.price, 0);
  },
  addToCart: (item) => Store.cart.push(item),

  lookUp: (userInput) => {
    const userText = userInput.toLocaleLowerCase().trim();
    const userTextLength = userText.length;
    let newArr = Store.data.filter((item) => {
      const slicedProductName = item.productName.slice(0, userTextLength);
      return slicedProductName === userText;
    });
    return newArr;
  },
};
const StoreContext = React.createContext(Store);

export { Store, StoreContext };
