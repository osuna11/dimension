import React from "react";
import './Navbar.css'
import images from "../../images";
import { Link } from "react-router-dom";

function Navbar() {


    var isLoggendin = false;

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
                                <Link className="nav-link" to="/Dashboard">Link</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/CreditPage">CreditPage</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/WirelessPayment">Wireless Payment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Exchange">Exchanged</Link>
                            </li>

                        </ul>

                        {isLoggendin ? <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src={images.fotoDePerfilNav} alt="" />
                                            Alan Najera
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item" href="/#">Action</a></li>
                                            <li><a className="dropdown-item" href="/#">Another action</a></li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li><Link className="dropdown-item" href="/#">Something else here</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul> :
                            <div className="d-flex">
                                <div>
                                    <Link class="btn btn-primary m-1" to="/Singin" role="button">Sing In</Link>
                                </div>
                                <div>
                                    <Link class="btn btn-primary m-1" to="/Login" role="button">Sing Up</Link>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Navbar