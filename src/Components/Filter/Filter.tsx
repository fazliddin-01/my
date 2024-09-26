import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../redux/slice/getAllProductsSlice";
import { Link } from "react-router-dom";
import { selectedBasketProduct } from "../../redux/slice/bascketSlice";

const Shop: React.FC = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const handleSortCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sorte = event.target.value;
    dispatch(fetchAllProducts({ skip: 0, sort: sorte }));
    localStorage.setItem("sortType", event.target.value);
  };

  const productInBasket = useSelector(selectedBasketProduct);

  useEffect(() => {
    setCount(productInBasket.length);
  }, [productInBasket]);

  return (
    <div className="filter">
      <div>
        <select className="click" onChange={handleSortCategory}>
          <option value="sortBy=title&order=asc">По алфавиту</option>
          <option value="sortBy=price">По цене</option>
          <option value="sortBy=title&order=desc">По описанию</option>
        </select>
      </div>

      <Link className="card" to={`/Korzinka`}>
        <span>🛒</span>
        <span className="card_count">{count}</span>
      </Link>
    </div>
  );
};

export default Shop;
