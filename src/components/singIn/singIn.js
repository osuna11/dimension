// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import images from "../../images";
import './singIn.css'
// eslint-disable-next-line
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";
import LoaderSpineer from "../LoaderSpinner/LoaderSpinner";

const SingIn = () => {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        document.title = 'Sing In';
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    let [dataItem, setDataItem] = useState({
        email: "",
        password: "",
    });
    
    const handleSubmitSingIp = (e) => {
        fetch('https://dimension12.herokuapp.com/api/login', {
            method: 'POST',
            body: JSON.stringify(dataItem),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            }
            return res.json();
        })
            .then(data => {
                // console.log(data.user)
                localStorage.setItem('identidad', JSON.stringify(data.user))
                localStorage.setItem('token', data.token);
                toast.success('Registered User!')
                window.location = '/';
            })
            .catch(function (err) {
                toast.error("" + err)
            });
        e.preventDefault()
    }

    const handleChang = (e) => {
        const { name, value } = e.target;
        setDataItem(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    return (
        <div>
            {loading ?
                <LoaderSpineer />
                :
                <div className="body">
                    <form className="form-signin" onSubmit={handleSubmitSingIp}>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <Link to="/">
                                    <img className="mb-4 img-logo" src={images.logoParaLogin} alt="logo" />
                                </Link>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control inputs-change-log rounded-pill" id="inputEmail"
                                placeholder="Email address" name="email" required autoFocus onChange={handleChang} />
                            <label htmlFor="inputEmail" className="visually-hidden">Email</label>
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
                    </form>
                    <Toaster
                        position="top-right"
                        reverseOrder={false}
                    />
                </div>
            }
        </div>

    );
}

export default SingIn;