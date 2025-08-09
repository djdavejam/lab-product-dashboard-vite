import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  {/* Define initial product data */}
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 699, inStock: true },
    { id: 2, name: 'Phone', price: 499, inStock: false },
    { id: 3, name: 'Tablet', price: 349, inStock: true },
  ]);
  {/* Implement state to manage filtering */}
  const [filterInStock, setFilterInStock] = useState(false);
  {/* Implement logic to filter products based on availability */}
  const filteredProducts = filterInStock ? products.filter(p => p.inStock) : products;

  return (
    <div>
      <h1>{/* Add 'Product Dashboard' title here */}Product Dashboard</h1>
      {/* Add buttons to allow filtering by availability */}
      <button onClick={() => setFilterInStock(false)}>All</button>
      <button onClick={() => setFilterInStock(true)}>In Stock</button>
      {/* Render the ProductList component and pass filtered products */}
      <ProductList products={filteredProducts} onRemove={(id) => setProducts(products.filter(p => p.id !== id))} />
    </div>
  );
};

export default App;