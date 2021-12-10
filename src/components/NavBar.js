import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand bg-success" style={{padding:'5px',borderRadius:'5px'}} to="/">BeeNewz</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {/* <li className="nav-item"> <Link className="nav-link " to="/">HOME</Link></li> */}

                                <li className="nav-item"> <Link className="nav-link" to="/business">BUSINESS </Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/entertainment">ENTERTAINMENT</Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/general">GENERAL </Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/health">HEALTH</Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/science">SCIENCE</Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/sports">SPORTS</Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/technology">TECHNOLOGY</Link></li>

                                {/* <li className="nav-item"> <Link className="nav-link bg-secondary" to="/about">ABOUT</Link></li> */}

                            </ul>
                           
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
