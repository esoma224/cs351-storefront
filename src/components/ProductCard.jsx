import React, { useState } from 'react';

const ProductCard = ({ product, addToCart }) => {
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        const cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            size: selectedSize,
            color: selectedColor,
            quantity: quantity,
        };

        addToCart(cartItem);
    };

    return (
        <div className="card m-3" style={{ width: '18rem' }}>
            <img src={product.image} className="card-img-top" alt={product.name} />

            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>

                <p className="card-text">{product.description}</p>

                <p className="card-text">
                    <strong>Price: ${product.price.toFixed(2)}</strong>
                </p>

                {/* Size Selection */}
                <div className="mb-3">
                    <label htmlFor="sizeSelect" className="form-label">
                        Select Size:
                    </label>

                    <select
                        id="sizeSelect"
                        className="form-select"
                        value={selectedSize}
                        onChange={(e) => setSelectedSize(e.target.value)}
                    >
                        {product.sizes.map((size, index) => (
                            <option key={index} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Color Selection */}
                <div className="mb-3">
                    <label htmlFor="colorSelect" className="form-label">
                        Select Color:
                    </label>

                    <select
                        id="colorSelect"
                        className="form-select"
                        value={selectedColor}
                        onChange={(e) => setSelectedColor(e.target.value)}
                    >
                        {product.colors.map((color, index) => (
                            <option key={index} value={color}>
                                {color}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Quantity Input */}
                <div className="mb-3">
                    <label htmlFor="quantityInput" className="form-label">
                        Quantity:
                    </label>

                    <input
                        type="number"
                        id="quantityInput"
                        className="form-control"
                        value={quantity}
                        min={1}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                    />
                </div>

                <button
                    className="btn btn-primary"
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;