import { Link } from "react-router-dom";

export const AddProduct = () => {
    return ( 
        <>
            <h1>addProduct Page</h1>
            <Link to="/">Show All Product</Link>
            ----
            <Link to="/">Cancel</Link>
        </>
     );
}