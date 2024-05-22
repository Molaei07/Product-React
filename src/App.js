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
    { id: 1, name: "Merident", price: 200000, image:"", score: 2 },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home list={list} setList={setList} />} />
        <Route path="/home" element={<Navigate replace to="/" />} />
        <Route path="/addproduct" element={<AddProduct list={list} setList={setList} />} />
        <Route path="/editproduct" element={<EditProduct list={list} setList={setList} />} />
        <Route path="/details" element={<DetailsItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
