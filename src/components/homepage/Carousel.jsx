import React from "react";
import './Carousel.css'

function Carousel(props) {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={props.img1} class="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <div className="row">
                                <div className="col-12 col-md-12">
                                    <h1 className="m-2 h1-info-banner text-wrap">1# Most Loved <br /> Crypto App</h1>
                                </div>
                                <div className="col-12 col-md-12 form-group">
                                    <input type="email" className="inputs-change rounded-pill form-control" id="inputEmail"
                                        placeholder="Email address" required autofocus />
                                    {/* <label for="inputEmail">Email</label> */}
                                    <button className="btn btn-custom m-2">Apply Now</button>
                                </div>
                                <div className="col-12 col-md-12 m-auto div-p">
                                    <p className="m-2 p-info-banner"> Cras faucibus ornare neque aliquam consectetur.
                                        Etiam pretium velit ac
                                        venenatis mattis. Sed urna
                                        erat,
                                        tempus
                                        quis urna et, placerat lobortis felis. Nunc sem mi, finibus vel cursus id, vulputate vel nisl. Sed
                                        feugiat
                                        fringilla luctus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={props.img2} class="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <div className="row">
                                <div className="col-12 col-md-12">
                                    <h1 className="m-2 h1-info-banner text-wrap">1# most loved <br /> Crypto App</h1>
                                </div>
                                <div className="col-12 col-md-12 form-group">
                                    <input type="email" className="inputs-change rounded-pill form-control" id="inputEmail"
                                        placeholder="Email address" required autofocus />
                                    {/* <label for="inputEmail">Email</label> */}
                                    <button className="btn btn-primary m-2">Apply Now</button>
                                </div>
                                <div className="col-12 col-md-12 m-auto div-p">
                                    <p className="m-2 p-info-banner"> Cras faucibus ornare neque aliquam consectetur.
                                        Etiam pretium velit ac
                                        venenatis mattis. Sed urna
                                        erat,
                                        tempus
                                        quis urna et, placerat lobortis felis. Nunc sem mi, finibus vel cursus id, vulputate vel nisl. Sed
                                        feugiat
                                        fringilla luctus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={props.img3} class="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <div className="row">
                                <div className="col-12 col-md-12">
                                    <h1 className="m-2 h1-info-banner text-wrap">1# most loved <br /> Crypto App</h1>
                                </div>
                                <div className="col-12 col-md-12 form-group">
                                    <input type="email" className="inputs-change rounded-pill form-control" id="inputEmail"
                                        placeholder="Email address" required autofocus />
                                    {/* <label for="inputEmail">Email</label> */}
                                    <button className="btn btn-primary m-2">Apply Now</button>
                                </div>
                                <div className="col-12 col-md-12 m-auto div-p">
                                    <p className="m-2 p-info-banner"> Cras faucibus ornare neque aliquam consectetur.
                                        Etiam pretium velit ac
                                        venenatis mattis. Sed urna
                                        erat,
                                        tempus
                                        quis urna et, placerat lobortis felis. Nunc sem mi, finibus vel cursus id, vulputate vel nisl. Sed
                                        feugiat
                                        fringilla luctus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}


export default Carousel;