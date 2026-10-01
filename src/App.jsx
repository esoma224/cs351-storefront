import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import products from "./data/products.json";
import AccountView from "./views/AccountView";
import CreateAccountView from "./views/CreateAccountView";
import CartView from "./views/CartView";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((previousCart) => [
      ...previousCart,
      item,
    ]);
  };

  const removeFromCart = (itemId) => {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== itemId)
    );
  };

  const updateQuantity = (itemId, newQuantity) => {
    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: Math.max(1, Number(newQuantity)),
            }
          : item
      )
    );
  };

  const handleLogin = (email, password) => {
    alert(`Login submitted for ${email}`);
  };

  const handleCreateAccount = (email, password) => {
    alert(`Account created for ${email}`);
  };

  const cartItemCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Router>
      <Navbar cartItemsCount={cartItemCount} />

      <main className="container my-4">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 className="text-center mb-4">
                  Welcome to My Shop
                </h1>

                <ProductList
                  products={products}
                  addToCart={addToCart}
                />
              </>
            }
          />

          <Route
            path="/shop"
            element={
              <ProductList
                products={products}
                addToCart={addToCart}
              />
            }
          />

          <Route
            path="/account"
            element={
              <AccountView onLogin={handleLogin} />
            }
          />

          <Route
            path="/create-account"
            element={
              <CreateAccountView
                onCreateAccount={handleCreateAccount}
              />
            }
          />

          <Route
            path="/cart"
            element={
              <CartView
                cartItems={cart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            }
          />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
