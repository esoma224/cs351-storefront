import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, addToCart }) => {
    return (
        <div className="container">
            <h2 className="my-4">Available Products</h2> {/* Title for the product list */}
            <div className="row">
                {products.length === 0 ? (
                    <div className="col-12">
                        <p>No products available.</p> {/* Message when there are no products */}
                    </div>
                ) : (
                    products.map((product) => (
                        <div className="col-md-4 mb-4" key={product.id}>
                            <ProductCard
                                product={product}
                                addToCart={addToCart}
                            />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ProductList;