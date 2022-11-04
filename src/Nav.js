import {  Link } from "react-router-dom";
import React from 'react';
function Nav()
{

    return (

        <nav>
            
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/Menu" className="nav-item">Menu</Link>
                <Link to="/Staff" className="nav-item">Offers</Link>
                <Link to="/Contact" className="nav-item">Order Now</Link>
     
        </nav>
    )
}
export default  Nav