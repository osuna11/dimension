import React from "react";
import images from "../../images";
import './Main.css'


function Mian() {
    return <div>
        <div className="container-fluid img-bg-iphone">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 order-md-0 order-1">
                    <div className="text-center">
                        <img src={images.iphoneDemision} className="w-75" alt="" />
                    </div>

                </div>
                <div className="col-12 col-sm-12 col-md-6 order-md-1 order-0">
                    <h1 className="title-degrade">
                        PAY ANYONE <br /> THE FATS, <br /> FEE-FREE WAY
                    </h1>
                    <div className="div-info">
                        <p className="p-info">
                            Cras faucibus ornare neque aliquam consectetur. Etiam pretium velit ac venenatis mattis. Sed urna erat,
                            tempus
                            quis urna et, placerat lobortis felis. Nunc sem mi, finibus vel cursus id, vulputate vel nisl. Sed feugiat
                            fringilla luctus.
                        </p>
                        <button type="button" className="btn btn-custom btn-lg">learn none <i
                            className="bi bi-chevron-compact-right"></i></button>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid img-bg pb-5 pt-5">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-5 order-0 m-auto">
                    <div className="float-end">
                        <h1 className="text-nowrap title-degrade title-banner">

                            Stay in control <br /> with alerts

                        </h1>
                        <p className="p-info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare sapien vitae nunc tristique tempor.
                            Donec nec blandit elit. Cras placerat non lorem interdum placerat. In tincidunt porta lectus nec pretium.
                            Curabitur fermentum sit amet tellus sed hendrerit. Nam suscipit nulla in imperdiet luctus.
                        </p>
                    </div>

                </div>
                <div className="col-12 col-sm-12 col-md-7 order-1 m-auto ">
                    <div className="bg-notifications-elemtes">
                        <div className="container-fluid,">
                            <div className="row height-row">
                                <div className="col-xxl-1 col-md-1"></div>
                                <div className="col-xxl-6 col-md-8 bg-cards">
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
                                <div className="col-xxl-5 col-md-3"></div>
                            </div>
                            <div className="row height-row">
                                <div className="col-xxl-5 col-md-4"></div>
                                <div className="col-xxl-6 col-md-8 bg-cards">
                                    <div className="bg-cards-span">
                                        <img src={images.carterabitcoin} alt="cryptocurrency"
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
                            </div>
                            <div className="row height-row">
                                <div className="col-xxl-6 col-md-8 bg-cards">
                                    <div className="bg-cards-span">
                                        <img src={images.bitcoin} alt="cryptocurrency"
                                            className="notifications-img" />
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
                                <div className="col-xxl-6 col-md-3"></div>
                            </div>
                            <div className="row height-row">
                                <div className="col-xxl-4 col-md-3"></div>
                                <div className="col-xxl-6 col-md-8 bg-cards">
                                    <div className="bg-cards-span">
                                        <img src={images.manosbitcoin} alt="cryptocurrency"
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid img-bg-card mt-3">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 order-1 order-sm-1 order-md-0 m-auto">
                    <div>
                        <img src={images.credtsCards} className="w-75" alt="" />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 order-0 order-sm-0 order-md-1 m-auto">
                    <h1 className="title-degrade">
                        A new way to <br /> Build credit
                    </h1>
                    <div className="div-Credits">
                        <p className="p-info">
                            Cras faucibus ornare neque aliquam consectetur. Etiam pretium velit ac venenatis mattis. Sed urna erat,
                            tempus
                            quis urna et, placerat lobortis felis. Nunc sem mi, finibus vel cursus id, vulputate vel nisl. Sed feugiat
                            fringilla luctus.
                        </p>
                        <button type="button" className="btn btn-custom btn-lg">learn none <i
                            className="bi bi-chevron-compact-right"></i></button>
                        <br />
                        <br />
                        <p className="text-muted">Cras faucibus ornare neque <br />Cras faucibus ornare neque</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Mian