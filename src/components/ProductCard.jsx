import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  return (
    <div className={product.inStock ? '' : styles.outOfStockClass}>
      {/* Apply conditional class to <div> above for out-of-stock items */}
      <h3>{/* Display product name */}{product.name}</h3>
      <p>{/* Display product price */}${product.price}</p>
      <p>{/* Show if the product is in stock or out of stock */}{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
      <button onClick={() => onRemove(product.id)}>Remove</button>
    </div>
  );
};

export default ProductCard;