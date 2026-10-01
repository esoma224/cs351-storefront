import React, { useState } from 'react';

const ProductDetailView = ({ product, addToCart }) => {
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return <p>Loading...</p>;
    }

    const handleAddToCart = () => {
        if (selectedSize && selectedColor) {
            const itemToAdd = {
                 ...product,
                  size: selectedSize,
                  color: selectedColor,
                   quantity: Math.max(1, Number(quantity) || 1),
                };
            addToCart(itemToAdd);
        } else {
            alert("Please select size and color before adding to cart.");
        }
    };

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} style={{ width: '200px', height: 'auto' }} />
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Description: {product.description}</p>

            <div>
                <label htmlFor="size">Size:</label>
                <select 
                    id="size" 
                    value={selectedSize} 
                    onChange={(e) => setSelectedSize(e.target.value)}
                >
                    <option value="">Select Size</option>
                    {product.sizes.map((size) => (
                        <option key={size} value={size}>{size}</option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="color">Color:</label>
                <select 
                    id="color" 
                    value={selectedColor} 
                    onChange={(e) => setSelectedColor(e.target.value)}
                >
                    <option value="">Select Color</option>
                    {product.colors.map((color) => (
                        <option key={color} value={color}>{color}</option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="quantity">Quantity:</label>
                <input 
                    type="number" 
                    id="quantity" 
                    value={quantity} 
                    min="1" 
                    onChange={(e) =>
                        setQuantity(Math.max(1, Number(e.target.value) || 1))
                    }
                />
            </div>

            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductDetailView;