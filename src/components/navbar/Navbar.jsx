import React from "react";
import './Navbar.css'
import images from "../../images";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg pt-3 pb-3 bg-white">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={images.logonavbar} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Login">Log in</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Dashboard">Link</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/CreditPage">CreditPage</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/WirelessPayment">Wireless Payment</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/#">Action</a></li>
                                    <li><a className="dropdown-item" href="/#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="/#">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Navbar