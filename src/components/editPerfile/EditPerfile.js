import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
// eslint-disable-next-line
import images from "../../images";
import './EditPerfile.css';
import LoaderSpineer from "../LoaderSpinner/LoaderSpinner";




const EditPerfiel = () => {

    let [data, setDataUpdate] = useState({
        email: "",
        lastName: "",
        name: "",
    });

    const [loading, setLoading] = useState(false);

    const getIdentidad = localStorage.getItem('identidad')
    const userToken = JSON.parse(getIdentidad);
    // setDataUpdate(userToken);

    useEffect(() => {
        setDataUpdate(userToken)
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    const handleChang = (e) => {
        const { name, value } = e.target;
        setDataUpdate(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }



    return (


        <div>
            {loading ?
                <LoaderSpineer /> :
                <div>
                    <Navbar />
                    <div className="container container-edit">
                        <div className="row gutters">
                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                                <div className="card h-100">
                                    <div className="card-body shadow">
                                        <div className="account-settings">
                                            <div className="user-profile">
                                                <div className="user-avatar">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin" />
                                                </div>
                                                <h5 className="user-name">{data.name} {data.lastName}</h5>
                                                <h6 className="user-email">{data.email}</h6>
                                            </div>
                                            <div className="about">
                                                <h5>About</h5>
                                                <p>I'm Yuki. Full Stack Designer I enjoy creating user-centric, delightful and human experiences.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                                <div className="card h-100">
                                    <div className="card-body shadow">
                                        <div className="row gutters">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <h6 className="mb-2 text-primary">Personal Details</h6>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="fullName">Full Name</label>
                                                    <input type="text" name="name" className="form-control" id="fullName" placeholder="Enter full name" onChange={handleChang} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="lastName1">Last Name</label>
                                                    <input type="text" name="lastName" className="form-control" id="lastName1" placeholder="Enter phone number" onChange={handleChang} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="eMail">Email</label>
                                                    <input type="email" name="email" className="form-control" id="eMail" placeholder="Enter email ID" onChange={handleChang} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="website">Website URL</label>
                                                    <input type="url" className="form-control" id="website" placeholder="Website url" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row gutters">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <h6 className="mt-3 mb-2 text-primary">Address</h6>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="Street">Street</label>
                                                    <input type="name" className="form-control" id="Street" placeholder="Enter Street" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="ciTy">City</label>
                                                    <input type="name" className="form-control" id="ciTy" placeholder="Enter City" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="sTate">State</label>
                                                    <input type="text" className="form-control" id="sTate" placeholder="Enter State" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="zIp">Zip Code</label>
                                                    <input type="text" className="form-control" id="zIp" placeholder="Zip Code" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row gutters">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="text-end">
                                                    <button type="button" id="submit" name="submit" className="btn btn-secondary m-1">Cancel</button>
                                                    <button type="button" id="submit" name="submit" className="btn btn-primary m-1">Update</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            }

        </div>
    );

}


export default EditPerfiel;