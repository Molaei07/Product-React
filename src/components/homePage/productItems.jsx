/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

export const Item = ({ id, name, price, list, setList }) => {

    /* Delete Item */
    const handleDelete = (productId) => {
        console.log(productId)
        setList(list.filter(el => el.id !== productId))
    }

    return (
        <div className="itemContainer">
            <div className="picture">
                <img src="./02-2.jpg" alt="product" />
            </div>
            <div className="info">
                <span className="productName">{name}</span>
                <span className="price">{price + " ريال "}</span>
                <div className="btnContainer">
                    <Link className="btn more-btn" to="/details">جزئیات</Link>
                    <Link className="btn edit-btn" to="/editproduct">ویرایش</Link>
                    <button onClick={() => { handleDelete(id) }} className="btn delete-btn">حذف</button>
                </div>
            </div>
        </div>
    );
}