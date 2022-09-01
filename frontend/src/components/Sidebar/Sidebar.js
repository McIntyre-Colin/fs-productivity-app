import React from "react";
import {Link} from 'react-router-dom';
import './Sidebar.css'

function Sidebar(props) {

    return(
        <div className="Sidebar">
            <div className="Sidebar-title">
                Your Projects
            </div>
            <div className="Sidebar--favorite">
                Favorited Projects
            </div>
            <div className="Sidebar-folder">
                Your Projects
                <div className="Sidebar-project">
                    test personal
                </div>
            </div>
            <div className="Sidebar-title">
                Group Projects
            </div>
            <div className="Sidebar-folder">
                Group 1
                <div className="Sidebar-project">
                    Test 1
                </div>
            </div>
        </div>
    )
}

export default Sidebar
