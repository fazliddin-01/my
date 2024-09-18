import React, { useState, useEffect } from "react";
import Pagination from "../Content/Pagination";
import Nav from "../Nav/Nav";
import Shop from "../Filter/Filter";
import ProductBox from "./ProductBox";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, selectedAllProducts } from "../../redux/slice/getAllProductsSlice";
const HomePage = () => {
  const dispatch = useDispatch()
  const {products} = useSelector(selectedAllProducts)
  const [currentPage, setCurrentPage] = useState(0);
  let perPage = currentPage * 12
  
  useEffect(() => {
    dispatch(fetchAllProducts({skip: perPage, sort:''}))
  }, [currentPage]);
  

  if (products) {
    return (
      <>
        <div className="container">
          <Nav />
          <h1 className="title">Products</h1>
          <Shop/>
          <div className="product">
            {products.map((item) => (
            <ProductBox item={item} key={item.id}/>
            ))}
          </div>
        </div>

        <Pagination setCurrentPage={setCurrentPage}/>
      </>
    );
  }
};

export default HomePage;
