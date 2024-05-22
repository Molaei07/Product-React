/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import "./addProductStyle.css";
import { Form, Field, Formik, ErrorMessage } from "formik";
import { AdminMenu } from "../adminMenu/adminMenu";
import { useState } from "react";
import * as yup from "yup";

export const AddProduct = ({ list, setList }) => {
    const validation = yup.object().shape({
        name: yup.string().required(),
        price: yup.number().required(),
        score: yup.number().max(5).min(1).required(),
    })

    /* Navigate to Home */
    const navigate = useNavigate();

    /* Set Picture */
    const [productImage, setProductImage] = useState();
    const setImage = (event) => {
        setProductImage(URL.createObjectURL(event.target.files[0]))
    }
    /* Set a new product to List */
    const createNewProduct = (values) => {
        setList([...list, values]);
    }

    return (
        <div className="container">
            <AdminMenu />
            <div className="content">
                <div className="header">
                    <h1 className="title">New Product</h1>
                </div>
                <Formik
                    initialValues={{ id: (list.length + 1), name: "", price: "", image: "", score: "" }}
                    onSubmit={(values) => { createNewProduct(values) }}
                    validationSchema={validation}
                >
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
                </Formik>
            </div>
        </div>
    );
}