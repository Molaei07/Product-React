/* eslint-disable no-unused-vars */
import "./addProductStyle.css";
import { Formik } from "formik";
import { AdminMenu } from "../adminMenu/adminMenu";
import * as yup from "yup";
import { FormList } from "../form/form";
import axios from "axios";

export const AddProduct = ({ list, setList }) => {
    const validation = yup.object().shape({
        name: yup.string().required(),
        price: yup.number().required(),
        score: yup.number().max(5).min(1).required(),
    })

    /* Set a new product to List */
    const createNewProduct = async (values) => {
        // const findSimilarProduct = list.find(el => el.id === values.id);
        // if (!findSimilarProduct) {
        //     setList([...list, values]);
        // }
        await axios.post("https://664e181dfafad45dfadf0061.mockapi.io/ProductList", values)
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
                    <FormList />
                </Formik>
            </div>
        </div>
    );
}