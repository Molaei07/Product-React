import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./components/homePage/home.jsx";
import { AddProduct } from "./components/addProductPage/addProduct.jsx";
import { EditProduct } from "./components/EditPage/Edit.jsx";
import { DetailsItem } from "./components/detailesProduct/detailes.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  /* Product List */
  const [list, setList] = useState([]);

  /*  
      All Method => GET POST PUT DELETE
      default method => GET
        Level 1
        fetch("url", {
          method: "GET"
        })
          .then(response => response.json())
          .then(response => setList(response)
        
        Level 2
        Use async & await
        I use async before function
        let response = await fetch("url", {
          method: "GET"
        })
        response = await response.json()
        setList(response)

        Level 3 
        Use axios
        
    */

  const getList = async () => {
    let res = await axios.get("https://664e181dfafad45dfadf0061.mockapi.io/ProductList")
    setList(res.data)
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home list={list} setList={setList} />} />
        <Route path="/home" element={<Navigate replace to="/" />} />
        <Route
          path="/addproduct"
          element={<AddProduct list={list} setList={setList} />}
        />
        <Route
          path="/editproduct"
          element={<EditProduct list={list} setList={setList} />}
        />
        <Route path="/details" element={<DetailsItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
