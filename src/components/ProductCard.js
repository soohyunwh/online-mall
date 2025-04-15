import React from "react";

const ProductCard = ({name, price, onAddToCart}) => {

    return (
        <div className="product-card">
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <button onClick={onAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;