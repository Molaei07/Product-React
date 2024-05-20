import { Link } from "react-router-dom";
import "./addProductStyle.css";
import { Header } from "../homePage/header";

export const AddProduct = () => {
    return ( 
        <>
            <Header />
            <div className="container">
                <h2 className="title titr">ثبت محصول جدید</h2>
                <span className="title">نام محصول:</span>
                <input type="text" className="field" />
                <span className="title">قیمت:</span>
                <input type="text" className="field" />
                <div className="chooseImage">
                    
                </div>
            </div>
            <Link to="/">Add</Link>
            ----
            <Link to="/">Cancel</Link>
        </>
     );
}