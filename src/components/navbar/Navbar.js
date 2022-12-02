import React from "react";
import './Navbar.css'
import images from "../../images";
import { Link } from "react-router-dom";

function Navbar() {

    const getIdentidad = localStorage.getItem('identidad')
    const userToken = JSON.parse(getIdentidad);
    // console.log(userToken.name)
    const tokenString = localStorage.getItem('token');
    // console.log(tokenString)

    const singOut = () => {
        localStorage.clear();
        window.location = '/';
    }

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
                                <Link className="nav-link" to="/CreditPage">CreditPage</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/WirelessPayment">Wireless Payment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Exchange">Exchanged</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Dashboard">Dashboard</Link>
                            </li>
                        </ul>
                        {tokenString ?
                            <div className="dropdown">
                                <button className="btn btn-outline-primary dropdown-toggle me-5" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    {userToken.name} {userToken.lastName}
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
                                    <li><Link className="dropdown-item" to="/EditPerfile">Edit Perfile</Link></li>
                                    <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" onClick={singOut}>Sing Out <i className="bi-power"></i></Link></li>
                                </ul>
                            </div>
                            :
                            <div className="d-flex">
                                <div>
                                    <Link className="btn btn-outline-success m-1" to="/Singin" role="button">Sing In <i className="bi-person-badge"></i></Link>
                                </div>
                                <div>
                                    <Link className="btn btn-outline-dark m-1" to="/SingUp" role="button">Sing Up <i className="bi-rocket-takeoff"></i></Link>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </nav >

        </div >
    );
}

export default Navbar