/* eslint-disable no-unused-vars */
import "./addProductStyle.css";
import { Formik } from "formik";
import AdminMenu from "../adminMenu/adminMenu";
import FormList from "../form/form";
import axios from "axios";
import { success, problem } from "../allToast/allToast";

const AddProduct = ({ list, setList, getList, validation }) => {
    /* Set a new product to List */
    const createNewProduct = async (values) => {
        try {
            await axios.post("https://664e181dfafad45dfadf0061.mockapi.io/ProductList", values)
            getList()
            success("Product add successfully")
        } catch {
            problem("Please try again!")
        }
    }

    return (
        <div className="container">
            <AdminMenu />
            <div className="content">
                <div className="header">
                    <h1 className="title">New Product</h1>
                </div>
                <Formik
                    initialValues={{ name: "", price: "", image: "", score: "" }}
                    onSubmit={(values) => { createNewProduct(values) }}
                    validationSchema={validation}
                >
                    <FormList />
                </Formik>
            </div>
        </div>
    );
}

export default AddProduct;