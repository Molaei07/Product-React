/* eslint-disable no-unused-vars */
import "./homePageStyle.css";
import { Header } from "./header";
import { WrapperItem } from "./wrapperItem";

export const Home = ({ list, setList }) => {
    return (
        <>
            <Header />
            <WrapperItem list={list} setList={setList} />
        </>
    );
}