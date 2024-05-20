/* eslint-disable no-unused-vars */
import "./homePageStyle.css";
import { Header } from "./header";
import { WrapperItem } from "./wrapperItem";
import { useState } from "react";

export const Home = () => {
    const [list, setList] = useState([
        {name: "خمیر دندان", price: "200000"},
        {name: "خمیر", price: "40000"},
        {name: "جفر", price: "3000000"},
        {name: "دندان", price: "500000"},
        {name: "ممد", price: "2500000"},
    ])

    return (
        <>
            <Header />
            <WrapperItem list={list} setList={setList} />
        </>
    );
}