import { Formik } from "formik";
import { FormList } from "../form/form";
import "./edit.css";
import { AdminMenu } from "../adminMenu/adminMenu";
import { useLocation } from "react-router-dom";
import axios from "axios";

export const EditProduct = ({ list, setList, validation }) => {
    

    /* Edit product */
    const handleEdit = (values) => {
        axios.put(`https://664e181dfafad45dfadf0061.mockapi.io/ProductList/${values.id}`, values)
            .then(() => {
                alert("is Edited")
            })
        /* Replace obj in list with new obj */
        let newList = list.find(el => el.id === values.id)
        Object.assign(newList, values) /* impotent! */
    }

    /* Get obj from List */
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
                    onSubmit={(values) => { handleEdit(values) }}
                    validationSchema={validation}
                >
                    <FormList />
                </Formik>
            </div>
        </div>);
}