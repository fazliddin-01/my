import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProductToBasket } from "../../redux/slice/bascketSlice";

export interface ProductBoxProps {
  item: {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    stock: number;
    thumbnail: string;
    quantity?: number;
  };
}

const ProductBox: React.FC<ProductBoxProps> = ({ item }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(item.quantity || 0);

  const handleSubmit = () => {
    dispatch(addProductToBasket({ ...item, quantity: count }));
  };

  const delcount = () => {
    if (count > 1) setCount(count - 1); // предотвращаем уменьшение количества ниже 1
  };
  console.log(item);

  return (
    <>
    <div className="product_card2" key={item.id}>
      <Link className="product_card active" to={`product/${item.id}`}>
        <img className="product_img" src={item.thumbnail} alt={item.title} />
      </Link>

      <h2 className="product_title">{item.title}</h2>
      <p className="product_description">{item.description}</p>
      <p className="product_price">Price: ${item.price}</p>
      <p className="product_disc">
        Discounted Price: $
        {(item.price - (item.price * item.discountPercentage) / 100).toFixed(2)}
      </p>
      <p className="product_stock">Stock: {item.stock}</p>

      <div className="product_filter">
        <button onClick={delcount} className="product_filter_minus">
          -
        </button>
        <p className="product_filter_ozg">
          <span>{count}</span>
        </p>
        <button
          onClick={() => setCount(count + 1)}
          className="product_filter_plus"
        >
          +
        </button>
      </div>

      <button className="Add_to_Cart" onClick={handleSubmit}>
        <p className="Add_to_Cart_text">Купить</p>
      </button>
    </div>
    </>
  );
};

export default ProductBox;
