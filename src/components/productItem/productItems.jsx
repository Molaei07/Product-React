/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";

export const Item = ({ id, name, price, list, setList }) => {

    const navigateDetails = useNavigate();
    const navigateEdit = useNavigate();

    /* Delete Item */
    const handleDelete = (productId) => {
        console.log(productId)
        setList(list.filter(el => el.id !== productId))
    }

    const handleDetails = (productId) => {
        const detailsObj = list.find(el => el.id === productId)
        console.log(detailsObj)
        navigateDetails("/details", {state: detailsObj})
    }

    return (
        <div className="itemContainer">
            <div className="picture">
                <img src="./02-2.jpg" alt="product" />
            </div>
            <div className="info">
                <span className="productName">{name}</span>
                <span className="price">{price + " $ "}</span>
                <div className="btnContainer">
                    <button className="btn more-btn" onClick={() => {
                        handleDetails(id)
                    }}>Details</button>
                    <button className="btn edit-btn" onClick={() => {
                        navigateEdit("/editproduct")
                    }}>Edit</button>
                    <button onClick={() => { handleDelete(id) }} className="btn delete-btn">Delete</button>
                </div>
            </div>
        </div>
    );
}