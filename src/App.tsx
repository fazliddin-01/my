import React from "react"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import ProductList from "./Components/Product/ProductList";
import Korzinka from "./Components/Korzinka/Korzinka";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Korzinka" element={<Korzinka />} />
        <Route path="/product/:id" element={<ProductList />} />
      </Routes>
    </Router>
  );
};

export default App;
