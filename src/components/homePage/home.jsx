import { Link } from "react-router-dom";

export const Home = () => {
    return ( 
        <>
            <h1>Home Page</h1>
            <Link to="/addproduct">Add Product</Link>
            ----
            <Link to="/editproduct">Edit Product</Link>
            ----
            <Link to="/details">Details Product</Link>
        </>
     );
}