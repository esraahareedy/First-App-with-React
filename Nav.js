import React, {Component} from 'react'
import './Style/nav.css'
import './Style/bootstrap.css'
import {Link} from "react-router-dom";


class Nav extends Component
{
    render()
    {
        return(
            <nav>
                <div className="container">
                    <div className="nav-logo">
                        <h3>SoftLand</h3>
                    </div>
                    <div className="nav-content">
                        <ul className="tfc">
                            <li>
                                <Link to="/">home</Link>
                            </li>
                            <li>
                                <Link to="/about">about</Link>
                            </li>
                            <li>
                                <Link to="/student">Students</Link>
                            </li> 
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Nav;
