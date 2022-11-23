
import React, { useState, useEffect } from "react";
import images from "../../images";
import './singUp.css'
import toast, { Toaster } from 'react-hot-toast';

const SingUp = () => {

    let [formdata, setData] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
    });

    useEffect(() => {
    }, []);
    // eslint-disable-next-line 
    const handleSubmitSingUp = (e) => {
        fetch('http://localhost:4000/api/signUp', {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(res => {
            if (!res.ok) {
                console.log(res.status)
                if (res.status === 500) {
                    throw new Error("Email already registered");
                }
                if (res.status === 400) {
                    throw new Error("Required data");
                }
            }
            return res.json();
        })
            .then(data => {
                console.log(data)
                toast.success('Registered User!')
                window.location = '/';
            })
            .catch(function (err) {
                toast.error("" + err)
            });
        e.preventDefault()
    }

    // eslint-disable-next-line 
    const handleChang = (e) => {
        const { name, value } = e.target;
        setData(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }

        })
    }

    return (
        <div className="bodySingup">
            {/* <form className="form-signin" onSubmit={handleSubmitSingUp}>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <img className="mb-4 img-logo" src={images.logoParaLogin} alt="logo" />
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control inputs-change-log rounded-pill" id="inputEmail"
                        placeholder="Email address" name="email" onChange={handleChang} required autoFocus />
                    <label htmlFor="inputEmail" className="visually-hidden">Email</label>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control inputs-change-log rounded-pill" id="inputName"
                        placeholder="Name" name="name" onChange={handleChang} required autoFocus />
                    <label htmlFor="inputName" className="visually-hidden">name</label>
                </div>
                <div className="form-group">
                    <input type="password" id="inputPassword" className="form-control inputs-change-log rounded-pill" placeholder="Password"
                        required name="password" onChange={handleChang} />
                    <label htmlFor="inputPassword" className="visually-hidden">Password</label>
                </div>
                <button className="btn btn-lg btn-primary btn-block button-lon-in mb-3 w-100 rounded-pill" type="submit">Log In</button>
                <div className="form-group form-link-footer">
                    <a className="form-link-footer link-hover text-center" href="/#">Forgot your email address?</a>
                    <br />
                    <a className="form-link-footer link-hover text-center" href="/#">Forgot your password?</a>
                </div>
                <p className="mt-5 mb-3 text-muted text-center">By clicking "Log in" , You agree tp recieve SMS text <br /> messages from Chime to
                    Verify your identity</p>
                <p className="mt-5 mb-3 text-muted text-center">&copy; 2022 Dimension. All rights Reserved</p>
            </form> */}
            <form className="form-signUp" onSubmit={handleSubmitSingUp}>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <img className="mb-4 img-logo" src={images.logoParaLogin} alt="logo" />
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputName">Name</label>
                        <input type="text" name="name" className="form-control inputs-change-log rounded-pill" id="inputName" placeholder="Name" required autoFocus onChange={handleChang} />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="inputlastName">Last Name</label>
                        <input type="text" name="lastName" className="form-control inputs-change-log rounded-pill" id="inputlastName" placeholder="Last Name" required autoFocus onChange={handleChang} />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputEmail">Email</label>
                        <input type="email" name="email" className="form-control inputs-change-log rounded-pill" id="inputEmail" placeholder="Email" required autoFocus onChange={handleChang} />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="inputPassword">Password</label>
                        <input type="password" name="password" className="form-control inputs-change-log rounded-pill" id="inputPassword" placeholder="Password" required autoFocus onChange={handleChang} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-space button-lon-in mb-3 rounded-pill">Sign in</button>
            </form>
            <Toaster position="top-right" />
        </div>
    );
}


export default SingUp;