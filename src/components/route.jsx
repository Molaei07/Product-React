import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./homePage/home.jsx";
import AddProduct from "./addProductPage/addProduct.jsx";
import EditProduct from "./EditPage/Edit.jsx";
import DetailsItem from "./detailesProduct/detailes.jsx";
import validation from "../validationError.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

export const RouteApplication = () => {
    /* Product List */
    const [list, setList] = useState([]);

    /* Function Get List From Sever */
    const getList = async () => {
        let res = await axios.get(
            "https://664e181dfafad45dfadf0061.mockapi.io/ProductList"
        );
        setList(res.data);
    };

    /* Get List */
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
                    element={<AddProduct list={list} setList={setList} getList={getList} validation={validation} />}
                />
                <Route
                    path="/editproduct"
                    element={<EditProduct list={list} setList={setList} validation={validation} />}
                />
                <Route path="/details" element={<DetailsItem />} />
            </Routes>
        </BrowserRouter>
    );
}