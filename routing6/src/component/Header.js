import React from 'react';
import {Outlet,Link} from 'react-router-dom';
import Footer from './Footer';

const Header = (props) => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Developer Funnel</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/post">Post</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/profile">Profile</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <hr/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Header