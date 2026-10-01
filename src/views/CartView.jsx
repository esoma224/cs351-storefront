import React from 'react';
import Cart from "../components/Cart";

const CartView = ({ cartItems, removeFromCart, updateQuantity }) => {
    return (
        <div>
            <h1>Your Shopping Cart</h1>
            <Cart 
                cartItems={cartItems} 
                removeFromCart={removeFromCart} 
                updateQuantity={updateQuantity} 
            />
        </div>
    );
};

export default CartView;