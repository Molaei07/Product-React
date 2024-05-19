import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./components/homePage/home.jsx";
import { AddProduct } from "./components/addProductPage/addProduct.jsx";
import { EditProduct } from "./components/EditPage/Edit.jsx";
import { DetailsItem } from "./components/detailesProduct/detailes.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate replace to="/" />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/editproduct" element={<EditProduct />} />
        <Route path="/details" element={<DetailsItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
