import { useState } from "react";
import { Store, StoreContext } from "./context";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

function App() {
  return (
    <StoreContext.Provider value={Store}>
      <h1>Online Store</h1>
      <ProductList />
      <Footer />
    </StoreContext.Provider>
  );
}

export default App;
