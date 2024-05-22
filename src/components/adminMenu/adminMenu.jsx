import './adminMenuStyle.css';
import { Link } from "react-router-dom";

export const AdminMenu = () => {
    return (
        <div className="m-container">
            <div className="menu">
                <div className="subject">
                    <div className="icon">
                        <img src="./logo192.png" alt="Admin" />
                    </div>
                    <div className="adminInfo">
                        {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
                        <h3 className="adminName">Amir</h3>
                        <span className="adminPosition"> <span className='positionPoint'></span> Online</span>
                    </div>
                </div>
                <ul className='m-itemsContainer'>
                    <li className='m-items'>
                        <Link className='address' to="/addproduct">Add New</Link>
                    </li>
                    <li className='m-items'>
                        <Link className='address' to="/">Home</Link>
                    </li>
                    <li className='m-items'>Chats</li>
                    <li className='m-items'>History</li>
                    <li className='m-items'>My Profile</li>
                    <li className='m-items'>Activity</li>
                    <li className='m-items'>About</li>
                </ul>
            </div>
        </div>
    );
}