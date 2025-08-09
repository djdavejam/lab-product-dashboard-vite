import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onRemove }) => {
  {/* Check if the product list is empty and display a message if needed */}
  return (
    <div>
      {/* Iterate over the products array and render a ProductCard for each product */}
      {products.length > 0 ? products.map(product => (
        <ProductCard key={product.id} product={product} onRemove={onRemove} />
      )) : <p>No products available</p>}
    </div>
  );
};

export default ProductList;