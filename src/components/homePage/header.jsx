import { Link } from "react-router-dom";

export const Header = () => {
    return ( 
        <div className="header">
            <div className="profile">
                <div className="icon"></div>
                <span className="adminName">ادمین</span>
            </div>
            <Link className="btn addProduct-btn" to="/addproduct">اضافه کردن محصول جدید</Link>
        </div>
    );
}