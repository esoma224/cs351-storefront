import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div>
            <h2>Your Cart</h2>
            <h3>Subtotal: ${total.toFixed(2)}</h3>
            <h3>Total Items: {totalItemCount}</h3>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <CartItem 
                            key={`${item.id}-${item.size}-${item.color}`} 
                            item={item} 
                            removeFromCart={removeFromCart} 
                            updateQuantity={updateQuantity} 
                        />
                    ))}
                    <h3>Total: ${total.toFixed(2)}</h3>
                </div>
            )}
        </div>
    );
};

export default Cart;