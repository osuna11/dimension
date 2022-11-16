import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import images from "../../images";
import './CreditPage.css'


function CreditPage() {
    return (
        <div>
            <Navbar />
            <main role="main" className="container">
                <div className="title-banner">
                    <h1 className="title-starter">Credit Plans</h1>
                    <p>A brief history of creation and<br />bussiness management</p>
                </div>
                <div className="p-5 box-shadow mx-auto banner-starter row align-items-center">
                    <div className="col-md-6 banner-left">
                        <h3 className="text-h3">Get A Business Loan</h3>
                        <h1 className="text-h1">0.5%<span className="text-span"> Interest</span>
                        </h1>
                    </div>
                    <div className="col-md-6 banner-right">
                        <h1 className="text-h1">Loan Plans</h1>
                        <button className="btn-custom">Apply Now</button>
                    </div>
                </div>
            </main>

            <div className="bg-gray">
            </div>

            <div className="bg-notifications-elemtes pb-5">
                <div className="title-banner">
                    <h1 className="title-starter">All Lean Plans</h1>
                </div>
                <div className="container">
                    <div className="row height-row">
                        <div className="col-md-2"></div>
                        <div className="col-md-6 bg-cards">
                            <div className="bg-cards-span">
                                <img src={images.cryptocurrency1} alt="cryptocurrency"
                                    className="notifications-img" />
                                <div>
                                    <h3 className="notifications-text-h3">Education

                                        <span className="notifications-text-span">
                                            <br />
                                            Be notified every morning
                                        </span>
                                    </h3>
                                </div>
                                <label className="toggle">
                                    <input className="toggle-checkbox" type="checkbox" />
                                    <div className="toggle-switch"></div>
                                    <span className="toggle-label"></span>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                    <div className="row height-row">
                        <div className="col-md-5"></div>
                        <div className="col-md-6 bg-cards">
                            <div className="bg-cards-span">
                                <img src={images.cryptocurrency1} alt="cryptocurrency"
                                    className="notifications-img" />
                                <div>
                                    <h3 className="notifications-text-h3">Home Lean

                                        <span className="notifications-text-span">
                                            <br />
                                            Be notified every morning spend
                                        </span>
                                    </h3>
                                </div>
                                <label className="toggle">
                                    <input className="toggle-checkbox" type="checkbox" defaultChecked />
                                    <div className="toggle-switch"></div>
                                    <span className="toggle-label"></span>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row height-row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6 bg-cards">
                            <div className="bg-cards-span">
                                <img src={images.cryptocurrency1} alt="cryptocurrency" className="notifications-img" />
                                <div>
                                    <h3 className="notifications-text-h3">Business Lean

                                        <span className="notifications-text-span">
                                            <br />
                                            Use secure processes to protect your <br />information
                                        </span>
                                    </h3>
                                </div>
                                <label className="toggle">
                                    <input className="toggle-checkbox" type="checkbox" defaultChecked />
                                    <div className="toggle-switch"></div>
                                    <span className="toggle-label"></span>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-5"></div>
                    </div>
                    <div className="row height-row">
                        <div className="col-md-4"></div>
                        <div className="col-md-6 bg-cards">
                            <div className="bg-cards-span">
                                <img src={images.cryptocurrency1} alt="cryptocurrency"
                                    className="notifications-img" />
                                <div>
                                    <h3 className="notifications-text-h3">Special Lean

                                        <span className="notifications-text-span">
                                            <br />
                                            Set up direct deposit and get your <br /> paycheck up
                                        </span>
                                    </h3>
                                </div>
                                <label className="toggle">
                                    <input className="toggle-checkbox" type="checkbox" />
                                    <div className="toggle-switch"></div>
                                    <span className="toggle-label"></span>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>

            <div className="container con-down">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 img-apply">
                        {/* <img src={images.carterabitcoin} alt="logo" width="100%" /> */}
                    </div>
                </div>
                <div className="col-md-3"></div>

                <div className="row">
                    <div className="col-md-12 div-apply">
                        <h1 className="h1-apply">Open a crypo account <br /> online in 2 minutes</h1>
                        <p>No credit check. No opening deposit requirement. <br /> No Hassle</p>
                        <button className="btn-custom">Get Started</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CreditPage;