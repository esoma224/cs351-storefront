import React from 'react';

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        if (newQuantity >= 1) { 
            updateQuantity(item.id, newQuantity);
        }
    };

    const handleIncrease = () => {
        updateQuantity(item.id, item.quantity + 1);
    };

    const handleDecrease = () => {
        if (item.quantity > 1) { 
            updateQuantity(item.id, item.quantity - 1);
        }
    };

    const lineTotal = (item.price * item.quantity).toFixed(2); // Calculate line total

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} style={{ width: '100px', height: 'auto' }} /> {/* Display product image */}
            <h4>{item.name}</h4>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>Size: {item.size}</p>
            <p>Color: {item.color}</p>
            <div className="quantity-controls">
                <button onClick={handleIncrease}>+</button>
                <input 
                    type="number" 
                    value={item.quantity} 
                    onChange={handleQuantityChange} 
                    min="1" 
                />
                <button onClick={handleDecrease}>-</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
            <p>Line Total: ${lineTotal}</p> {/* Display line total */}
        </div>
    );
};

export default CartItem;