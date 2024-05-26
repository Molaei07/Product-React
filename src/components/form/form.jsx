import { Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormList = () => {
    /* Set Picture */
    const [productImage, setProductImage] = useState();
    const setImage = (event) => {
        setProductImage(URL.createObjectURL(event.target.files[0]))
    }
    /* Navigate to Home */
    const navigate = useNavigate();

    return (
        <Form className="content">
            <div className="partLeft">
                <span className="partName">Picture:</span>
                <Field type="file" id="chooseImage" name="image" accept="image/*" onChange={(event) => { setImage(event) }} />
                <label htmlFor="chooseImage" className="choose">
                    <img
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                        src={productImage ? productImage : "Its a problem!"}
                        alt=""
                    />
                </label>
            </div>
            <div className="partRight">
                <span className="partName">Name:{<ErrorMessage component={"span"} name="name" className="error" />}</span>
                <Field type="text" name="name" />
                <span className="partName">Price:{<ErrorMessage component={"span"} name="price" className="error" />}</span>
                <Field type="number" name="price" />
                <span className="partName">Score:{<ErrorMessage component={"span"} name="score" className="error" />}</span>
                <Field type="number" name="score" />
                <div className="buttons">
                    <button type="submit" className="btn add-btn">Add</button>
                    <button className="btn cancel-btn" onClick={() => {
                        navigate("/")
                    }}>Cancel</button>
                </div>
            </div>
        </Form>
    );
}

export default FormList;