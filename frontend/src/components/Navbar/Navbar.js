import React from "react";
import {Link} from 'react-router-dom';

import './Navbar.css'

function Navbar(props) {

    return (
        <div className="Navbar">
            <div className="Navbar-title">
                HiveMinds (Logo)
            </div>
            <div className="Navbar-link">
                <Link to="/">Home</Link>
            </div>
            <div className="Navbar-link">
                <Link to="/garden">Garden</Link>
            </div>
            <div className="Navbar-link">
                <Link to="/hive">Hive</Link>
            </div>
        </div>
    )
}

export default Navbar