import { Formik } from "formik";
import { FormList } from "../form/form";
import "./edit.css";
import { AdminMenu } from "../adminMenu/adminMenu";
import * as yup from "yup";
import { useLocation } from "react-router-dom";

export const EditProduct = ({ list, setList }) => {
    const validation = yup.object().shape({
        name: yup.string().required(),
        price: yup.number().required(),
        score: yup.number().max(5).min(1).required(),
    })

    const edId = useLocation();
    return (
        <div className="container">
            <AdminMenu />
            <div className="content">
                <div className="header">
                    <h1 className="title">Edit Product</h1>
                </div>
                <Formik
                    initialValues={{ id: edId.state.id, name: edId.state.name, price: edId.state.price, image: "", score: edId.state.score }}
                    onSubmit={(values) => { alert("is Edited") }}
                    validationSchema={validation}
                >
                    <FormList />
                </Formik>
            </div>
        </div>);
}