import React, { useState, useEffect } from "react";
import images from "../../images";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar"
import './Exchange.css'





const Bandera1 = "https://proyectoviajero.com/wp-content/uploads/2021/03/Bandera-de-Albania.svg"
const Bandera2 = "https://proyectoviajero.com/wp-content/uploads/2021/03/Bandera-de-Andorra.svg"


function Exchange() {


    const [cash, setCash] = useState(0)
    const afterClick = () => {
        var fromCurrency = document.querySelector(".from select")
        var toCurrency = document.querySelector(".to select")


        // const dropList = document.querySelectorAll(".drop-list select")
        // const exchageIcon = document.querySelector(".drop-list .icon");s

        if (fromCurrency.value === toCurrency.value) {
            alert("no puedes cambiar entre la misma moneda")
        }

        var tempCode = fromCurrency.value;
        fromCurrency.value = toCurrency.value;
        toCurrency.value = tempCode;
    }

    useEffect(() => {
        var frominputs = document.querySelector(".from input")

        setCash (frominputs.value) 
        console.log(frominputs.value)
        document.getElementById("prueba").addEventListener("click", afterClick)
    })


    return (
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
                            <div className="col-4"><h1>Exchange 1</h1></div>
                            <div className="col-4"><button className="btn-color"><i className="bi bi-box-arrow-up"></i></button></div>
                        </div>

                        <div className="wrapper">

                            <header>Currency Converter</header>
                            <form action='/Exchange'>
                                <div className="amount">
                                    <p>Enter amount</p>
                                    <div className="from row">
                                        <p>From</p>
                                        <div className="select-box col-6">
                                            <img src={Bandera1} alt="flag" width="64" />
                                            <select defaultValue={'AFN'} >
                                                <option value="AED">AED</option>
                                                <option value="AFN">AFN</option>
                                                <option value="XCD">XCD</option>
                                                <option value="ALL">ALL</option>
                                                <option value="AMD">AMD</option>
                                            </select>

                                        </div>
                                        <div className="col-6">
                                            <input type="text" defaultValue="1" />
                                            <p>${ cash}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="icon col-12" id="prueba"><i className="bi bi-arrow-left-right"></i></div>
                                </div>
                                <div className="drop-list">
                                    <div className="to row">
                                        <p>To</p>
                                        <div className="select-box col-6">
                                            <img src={Bandera2} alt="flag" width="64" />
                                            <select defaultValue={'AED'} >
                                                <option value="AED">AED</option>
                                                <option value="AFN">AFN</option>
                                                <option value="XCD">XCD</option>
                                                <option value="ALL">ALL</option>
                                                <option value="AMD">AMD</option>
                                            </select>
                                        </div>
                                        <div className="col-6">
                                            <input type="text" defaultValue="1" />
                                            <p>$</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="exchange-rate">1 USD = 118.16 NPR</div>
                                <button>Get Exchange Rate</button>
                            </form>
                            {/* <span className="tab-exchange flex-container">
                                <div>
                                    <img src={images.cryptocurrency1} alt="CrytoMonena" />
                                </div>
                                <div>
                                    <select name="select">
                                        <option value="value1">value 1</option>
                                        <option value="value2">value 2</option>
                                        <option value="value3">value 3</option>
                                    </select>
                                </div>
                                <div>
                                    <span>
                                        <p>-1.9737</p>
                                        <p>1.2302223</p>
                                    </span>
                                </div>
                            </span>

                            <button className="exchange-btn"><i className="bi bi-arrow-down-up"></i></button>
                            <span className="tab-exchange flex-container">
                                <div>
                                    <img src={images.cryptocurrency1} alt="CrytoMonena" />
                                </div>
                                <div>
                                    <select name="select">
                                        <option value="value1">value 1</option>
                                        <option value="value2">value 2</option>
                                        <option value="value3">value 3</option>
                                    </select>
                                </div>
                                <div>
                                    <span>
                                        <p>-1.9737</p>
                                        <p>1.2302223</p>
                                    </span>
                                </div>
                            </span> */}

                            <span className="btn-span">
                                <button className="">Swap Now</button>
                                <button className="">Save transfer</button>
                            </span>
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
                                {/* <select defaultValue={'value1'}>
                                    <option value="value1">value 1</option>
                                    <option value="value2">value 2</option>
                                    <option value="value3">value 3</option>
                                </select> */}
                                <span>
                                    <p>-1.9737</p>
                                    <p>1.2302223</p>
                                </span>
                            </span>
                            <button className="exchange-btn"><i className="bi bi-arrow-down-up"></i></button>
                            <span className="tab-exchange">
                                <img src={images.cryptocurrency1} alt="CrytoMonena" />
                                {/* <select defaultValue={'value1'}>
                                    <option value="value1">value 1</option>
                                    <option value="value2">value 2</option>
                                    <option value="value3">value 3</option>
                                </select> */}
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
                                {/* <select defaultValue={'value1'}>
                                    <option value="value1">value 1</option>
                                    <option value="value2">value 2</option>
                                    <option value="value3">value 3</option>
                                </select> */}
                                <span>
                                    <p>-1.9737</p>
                                    <p>1.2302223</p>
                                </span>
                            </span>
                            <button className="exchange-btn"><i className="bi bi-arrow-down-up"></i></button>
                            <span className="tab-exchange">
                                <img src={images.cryptocurrency1} alt="CrytoMonena" />
                                {/* <select defaultValue={'value1'}>
                                    <option value="value1">value 1</option>
                                    <option value="value2">value 2</option>
                                    <option value="value3">value 3</option>
                                </select> */}
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
        </div>
    );
}


export default Exchange;