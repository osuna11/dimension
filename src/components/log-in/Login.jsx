import React from "react";
import images from "../../images";
import './Login.css'
import toast, { Toaster } from 'react-hot-toast';

function LonIn() {
    return (
        <div className="body">
            <form className="form-signin" action="/">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <img className="mb-4 img-logo" src={images.logoParaLogin} alt="logo" />
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control inputs-change-log rounded-pill" id="inputEmail"
                        placeholder="Email address" required autoFocus />
                    <label htmlFor="inputEmail" className="visually-hidden">Email</label>
                </div>
                <div className="form-group">
                    <input type="password" id="inputPassword" className="form-control inputs-change-log rounded-pill" placeholder="Password"
                        required />
                    <label htmlFor="inputPassword" className="visually-hidden">Password</label>
                </div>
                <button className="btn btn-lg btn-primary btn-block button-lon-in mb-3 w-100 rounded-pill" type="submit" onClick={() => toast.success('Sesion Iniciada')}>Log In</button>
                <div className="form-group form-link-footer">
                    <a className="form-link-footer link-hover text-center" href="/#">Forgot your email address?</a>
                    <br />
                    <a className="form-link-footer link-hover text-center" href="/#">Forgot your password?</a>
                </div>
                <p className="mt-5 mb-3 text-muted text-center">By clicking "Log in" , You agree tp recieve SMS text <br /> messages from Chime to
                    Verify your identity</p>
                <p className="mt-5 mb-3 text-muted text-center">&copy; 2022 Dimension. All rights Reserved</p>
            </form>
            <Toaster position="top-right"/>
        </div>
    );
}

export default LonIn;