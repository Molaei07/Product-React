/* eslint-disable no-unused-vars */
import { Link, json, useNavigate } from "react-router-dom";
import axios from "axios";

export const Item = ({ id, name, price, list, setList }) => {

    const navigateDetails = useNavigate();
    const navigateEdit = useNavigate();

    /* Delete Item Form List */
    const handleDelete = (productId) => {
        axios.delete(`https://664e181dfafad45dfadf0061.mockapi.io/ProductList/${productId}`)
        .then(() => {
            alert("Product deleted")
        })
        setList(list.filter(el => el.id !== productId))
    }
    /* Send Obj To Details Page */
    const handleDetails = (productId) => {
        const detailsObj = list.find(el => el.id === productId)
        navigateDetails("/details", {state: detailsObj})
    }
    /* Send Obj To Edit Page */
    const handleEdit = (productId) => {
        const editObj = list.find(el => el.id === productId)
        navigateEdit("/editproduct", {state: editObj})
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
                        handleEdit(id)
                    }}>Edit</button>
                    <button onClick={() => {handleDelete(id)}} className="btn delete-btn">Delete</button>
                </div>
            </div>
        </div>
    );
}