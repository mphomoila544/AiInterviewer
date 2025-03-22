import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div className = "navbar-container">
            <h2 className = "Logo">
                <Link to = "/" className="Logo-txt">SMART<span className = "hire">HIRE</span></Link>
            </h2>
            <ul className = "nav-items">
                <li>ABOUT US</li>
                <li>PRODUCTS</li>
                <li>PARTNERS</li>
                <li>TRY IT OUT</li>
                <li><Link to = "/login" className = "nav-link">SIGN IN</Link></li>
            </ul>
        </div>

    )
}

export default NavBar;