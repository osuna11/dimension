import React from "react";
import images from "../../images";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar"
import './Exchange.css'

function Exchange() {
    return (
        <div className="bg-exchage">
            <Navbar />
            <div className="nav-tabs">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <h1>Exchange</h1>
                        <div>
                            <span className="tab-exchange">
                            <img src={images.cryptocurrency1} alt="CrytoMonena"/>
                                <select name="select">
                                    <option value="value1">Value 1</option>
                                    <option value="value2" selected>Value 2</option>
                                    <option value="value3">Value 3</option>
                                </select>
                            <span>
                                <p>-1.9737</p>
                                <p>1.2302223</p>
                            </span>
                            </span>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                </div>
            </div>
            <Footer />
        </div>
    );
}


export default Exchange;