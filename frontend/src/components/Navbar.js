import React from 'react'

import { BrowserRouter, Link, NavLink } from "react-router-dom";
import Login from './loginSignup/Login';

const Navbar = () => {

    let navStyle = {
        color: 'white',
        backgroundColor:'#0D0D0D',
        boxShadow: ''
    };
    let mystyle={
        flexDirection: 'row'
    };
    


    return (
        <>
            <nav className="navbar navbar-expand-lg " style={navStyle} >
                <div className="container-fluid" >
                    <a className="navbar-brand" href='http://localhost:3000'>Dashboard Customizer</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">toggle</span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item text-primary">
                                <NavLink to='/' className="nav-link active" aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/dashboard-customizer' className="nav-link" >Dashboard Customizer</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/dashboards' className="nav-link" >Browse Dashboards</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex me-5" style={mystyle}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                        <div className="d-fex me-right">

                            <NavLink to='/login' className="btn btn-outline-primary me-2" >Login</NavLink>
                            <NavLink to='/register' className="btn btn-primary" >Register</NavLink>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar