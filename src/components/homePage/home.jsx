/* eslint-disable no-unused-vars */
import "./homePageStyle.css";
import { WrapperItem } from "../productItem/wrapperItem";
import { AdminMenu } from "../adminMenu/adminMenu";

export const Home = ({ list, setList }) => {
    return (
        <div className="container">
            <AdminMenu />
            <WrapperItem list={list} setList={setList} /> 
        </div>
    );
}