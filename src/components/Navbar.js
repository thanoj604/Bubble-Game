import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#165761', color:'white'}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#" style={{color:'white'}}>Bubbles</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/" style={{color:'white'}}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" style={{color:'white'}}>About</NavLink>
                        </li>   
                    </ul>
                </div>
            </div>
        </nav>
    )
}
