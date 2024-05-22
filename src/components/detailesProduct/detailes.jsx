import { useLocation } from "react-router-dom";
import { AdminMenu } from "../adminMenu/adminMenu"

export const DetailsItem = () => {
    const locationId = useLocation();
    return (
        <div className="container">
            <AdminMenu />
            <div className="content">
                
            </div>
        </div>
    );
}