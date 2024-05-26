import { useLocation, useNavigate } from "react-router-dom";
import AdminMenu from "../adminMenu/adminMenu"
import "./detailes.css";

const DetailsItem = () => {
    const locationId = useLocation();
    const navigateHome = useNavigate();
    return (
        <div className="container">
            <AdminMenu />
            <div className="content">
                <div className="header">
                    <h1 className="title">Details Product</h1>
                </div>
                <div className="content">
                    <div className="partLeft">
                        <div className="choose">
                            <img src="./02-2.jpg" alt="" style={{ maxWidth: "100%", maxHeight: "100%" }} />
                        </div>
                    </div>
                    <div className="partRight">
                        <span className="info">{"Name: " + locationId.state.name}</span>
                        <span className="info">{"Price: " + locationId.state.price + " $ "}</span>
                        <span className="info">{"Score: " + locationId.state.score}</span>
                        <button className="btn" onClick={() => {
                            navigateHome("/")
                        }}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsItem;