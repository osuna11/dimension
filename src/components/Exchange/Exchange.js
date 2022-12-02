import React, { useState, useEffect } from "react";
import images from "../../images";
import Footer from "../footer/Footer";
import LoaderSpineer from "../LoaderSpinner/LoaderSpinner";
import Navbar from "../navbar/Navbar"
import './Exchange.css'

function Exchange() {

    let [inputValue, setInputValue] = useState(1)
    const [loading, setLoading] = useState(false);
    const afterClick = () => {
        var fromCurrency = document.querySelector(".from select")
        var toCurrency = document.querySelector(".to select")
        var fromInput = document.querySelector(".from input");
        var toInput = document.querySelector(".to input");
        var imgFrom = document.querySelector(".from img");
        var imgTo = document.querySelector(".to img")

        if (fromCurrency.value === toCurrency.value) {
            alert("no puedes cambiar entre la misma moneda")
        }

        var tempCode = fromCurrency.value;
        fromCurrency.value = toCurrency.value;
        toCurrency.value = tempCode;

        var tempInpur = fromInput.value;
        fromInput.value = toInput.value;
        toInput.value = tempInpur;

        var tempImg = imgFrom.src;
        imgFrom.src = imgTo.src;
        imgTo.src = tempImg
    }

    useEffect(() => {
        document.title = 'Exchange';

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);

        document.getElementById("prueba").addEventListener("click", afterClick)
        return () => {
            document.getElementById("prueba")?.removeEventListener("click", afterClick)
        };
    }, [])

    return (
        <div>
            {loading ? <LoaderSpineer /> :
                <div className="bg-exchage">

                    <Navbar />
                    {/* pestañas */}
                    <div className="nav-tabs-div">
                        {/* Barra de nvegacion */}
                        <ul className="nav nav-tabs nav-tabs-ul" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link button active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link button" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link button" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            {/* primer parte de intercambio */}
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row header-section">
                                    <div className="col-4"><button className="btn-color"><i className="bi bi-sliders"></i></button></div>
                                    <div className="col-4"><h1 className="title-trastations">Exchange</h1></div>
                                    <div className="col-4"><button className="btn-color"><i className="bi bi-box-arrow-up"></i></button></div>
                                </div>
                                <div className="wrapper">
                                    <form action='/Exchange'>
                                        <div className="amount">
                                            <div className="from row">
                                                <div className="select-box col-4 m-auto ">
                                                    <img src={images.eth} alt="flag" width="64" />
                                                    <select defaultValue={'AFN'} >
                                                        <option value="AED">AED</option>
                                                        <option value="AFN">AFN</option>
                                                        <option value="XCD">XCD</option>
                                                        <option value="ALL">ALL</option>
                                                        <option value="AMD">AMD</option>
                                                    </select>
                                                </div>
                                                <div className="col-4 display-exchange m-auto ">
                                                    <p className="text-end">~${inputValue * 3}</p>
                                                    <input className="from-input text-end" onChange={(event => setInputValue(event.target.value))} value={inputValue} type="text" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="icon " id="prueba"><i className="bi bi-arrow-left-right"></i></div>
                                        <div className="drop-list">
                                            <div className="to row">
                                                <div className="select-box col-4 m-auto ">
                                                    <img src={images.bircoin2} alt="flag" width="64" />
                                                    <select defaultValue={'AED'} >
                                                        <option value="AED">AED</option>
                                                        <option value="AFN">AFN</option>
                                                        <option value="XCD">XCD</option>
                                                        <option value="ALL">ALL</option>
                                                        <option value="AMD">AMD</option>
                                                    </select>
                                                </div>
                                                <div className="col-4 m-auto ">
                                                    <p className="text-end">~${inputValue}</p>
                                                    <input className="to-input text-end" id="prueba1" value={inputValue * 0.1} type="text" disabled />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row btn-row">
                                            <div className="col-12 col-md-4">
                                                <button className="btn-swap">Swap Now</button>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <button className="btn-save-transfer">Save transfer</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* segunda parte de intercambio */}
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <span className="header-section">
                                    <button className="btn-color"><i className="bi bi-sliders"></i></button>
                                    <h1>Exchange</h1>
                                    <button className="btn-color"><i className="bi bi-box-arrow-up"></i></button>
                                </span>
                                <div>
                                    <span className="tab-exchange">
                                        <img src={images.cryptocurrency1} alt="CrytoMonena" />
                                        <span>
                                            <p>-1.9737</p>
                                            <p>1.2302223</p>
                                        </span>
                                    </span>
                                    <button className="exchange-btn"><i className="bi bi-arrow-down-up"></i></button>
                                    <span className="tab-exchange">
                                        <img src={images.cryptocurrency1} alt="CrytoMonena" />
                                        <span>
                                            <p>-1.9737</p>
                                            <p>1.2302223</p>
                                        </span>
                                    </span>
                                    <span className="btn-span">
                                        <button className="btn-withdrown">Swap Now</button>
                                        <button className="btn-transfer">Save transfer</button>
                                    </span>
                                </div>
                            </div>
                            {/* tercera parte de intercambio */}
                            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <span className="header-section">
                                    <button className="btn-color"><i className="bi bi-sliders"></i></button>
                                    <h1>Exchange</h1>
                                    <button className="btn-color"><i className="bi bi-box-arrow-up"></i></button>
                                </span>
                                <div>
                                    <span className="tab-exchange">
                                        <img src={images.cryptocurrency1} alt="CrytoMonena" />
                                        <span>
                                            <p>-1.9737</p>
                                            <p>1.2302223</p>
                                        </span>
                                    </span>
                                    <button className="exchange-btn"><i className="bi bi-arrow-down-up"></i></button>
                                    <span className="tab-exchange">
                                        <img src={images.cryptocurrency1} alt="CrytoMonena" />
                                        <span>
                                            <p>-1.9737</p>
                                            <p>1.2302223</p>
                                        </span>
                                    </span>
                                    <span className="btn-span">
                                        <button className="btn-withdrown">Swap Now</button>
                                        <button className="btn-transfer">Save transfer</button>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <Footer />
                </div>}
        </div>


    );
}


export default Exchange;