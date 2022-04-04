import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
// import logo from '../../images/Logo.svg';
const Header = () => {
    return (
        <div>
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom" >
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    {/* <img className="bi me-2" width="100" height="42" role="img" aria-label="Bootstrap" src={logo} alt="" /> */}
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item"><Link to="/home" className="nav-link" aria-current="page">HOME</Link></li>
                    <li className="nav-item"><Link to="/reviews" className="nav-link">REVIEWS</Link></li>
                    <li className="nav-item"><Link to="/dashboard" className="nav-link">DASHBOARD</Link></li>
                    <li className="nav-item"><Link to="/blogs" className="nav-link">BLOGS</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link">ABOUT</Link></li>
                </ul>

                <div className="col-md-3 text-end">
                    <button type="button" className="btn btn-outline-primary me-2">Login</button>
                    <button type="button" className="btn btn-primary">Sign-up</button>
                </div>
            </header>

        </div >

    );
};

export default Header;