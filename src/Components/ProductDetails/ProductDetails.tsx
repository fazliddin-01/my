import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Lemon', price: '0.79', description: 'Zesty and tangy lemons...' },
  { id: 2, name: 'Milk', price: '3.49', description: 'Fresh and nutritious milk...' },
  { id: 3, name: 'Mulberry', price: '4.99', description: 'Sweet and juicy mulberries...' },
];

function ProductDetails() {
  const { id } = useParams<{ id: string }>(); 
  
  if (!id) {
    return <h2>Invalid product ID</h2>;
  }

  const product = products.find((product) => product.id === parseInt(id, 10));

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  const imageName = product.name.toLowerCase().replace(/\s+/g, '');

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <img src={`/images/${imageName}.png`} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductDetails;
