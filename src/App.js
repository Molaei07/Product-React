import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./components/homePage/home.jsx";
import { AddProduct } from "./components/addProductPage/addProduct.jsx";
import { EditProduct } from "./components/EditPage/Edit.jsx";
import { DetailsItem } from "./components/detailesProduct/detailes.jsx";
import { useState } from "react";

function App() {

  /* Product List */
  const [list, setList] = useState([
    { id: 1, name: "خمیر دندان", price: "200000" },
    { id: 2, name: "خمیر", price: "40000" },
    { id: 3, name: "جفر", price: "3000000" },
    { id: 4, name: "دندان", price: "500000" },
    { id: 5, name: "ممد", price: "2500000" },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home list={list} setList={setList} />} />
        <Route path="/home" element={<Navigate replace to="/" />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/editproduct" element={<EditProduct />} />
        <Route path="/details" element={<DetailsItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
