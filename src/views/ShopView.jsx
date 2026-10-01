import React from "react";
import ProductList from "../components/ProductList";

const ShopView = ({ products, addToCart }) => {
  return (
    <div className="container my-4">
      <h1 className="mb-4">Shop Our Products</h1>

      <ProductList
        products={products}
        addToCart={addToCart}
      />
    </div>
  );
};

export default ShopView;