
import React, { useState, useEffect } from "react";
import images from "../../images";
import './singUp.css'
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";

const SingUp = () => {

    let [formdata, setData] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
    });

    useEffect(() => {
        document.title = 'Sing Up';
    }, []);
    // eslint-disable-next-line 
    const handleSubmitSingUp = (e) => {
        fetch('https://dimension12.herokuapp.com/api/signUp', {
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
            <form className="form-signUp" onSubmit={handleSubmitSingUp}>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <Link to="/">
                            <img className="mb-4 img-logo" src={images.logoParaLogin} alt="logo" />
                        </Link>
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