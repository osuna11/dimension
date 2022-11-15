import React from 'react'
import images from "../../images";
import './Footer.css'

function Footer() {
    return (
        <div>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6 col-md-2 col-6">
                            <h6>Benefits</h6>
                            <ul className="footer-links">
                                <li><a href="/#">No Monthly Fees</a></li>
                                <li><a href="/#">Get Paid Early</a></li>
                                <li><a href="/#">Free-free Overdraft</a></li>
                                <li><a href="/#">Build Credit</a></li>
                                <li><a href="/#">60,000+ Free-Free ATMs</a></li>
                                <li><a href="/#">High Yield Savings Account</a></li>
                                <li><a href="/#">Send And Recieve Money</a></li>
                                <li><a href="/#">Security and Control</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-md-2 col-6">
                            <h6>Company</h6>
                            <ul className="footer-links">
                                <li><a href="/#">Abouts Us</a></li>
                                <li><a href="/#">Dimension, Inc.</a></li>
                                <li><a href="/#">In the News</a></li>
                                <li><a href="/#">Careers</a></li>
                                <li><a href="/#">Blogs</a></li>
                                <li><a href="/#">Segurity Programs</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-md-2 col-6">
                            <h6>Resources</h6>
                            <ul className="footer-links">
                                <li><a href="/#">Policies</a></li>
                                <li><a href="/#">Chime U.S Privacy Policy</a></li>
                                <li><a href="/#">Help Center</a></li>
                                <li><a href="/#">Second Chance Banking</a></li>
                                <li><a href="/#">Become an Affiliate</a></li>
                                <li><a href="/#">Supporting Those With Disabilities</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-md-2 col-6">
                            <h6>Contact Us</h6>
                            <ul className="footer-links">
                                <li> <a href="tel:844-244-6363s">844-244-6363</a> </li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-md-4">
                            <div className="row">
                                <div className="col-md-12 img-center-apply">
                                    <a href="/#"> <img src={images.logoFooter} alt="logo" />
                                    </a>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 img-center-apply">
                                    <a href="/#">
                                        <img src={images.logoGooglePlay} alt="" width="150" />
                                    </a>

                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 img-center-apply">
                                    <a href="/#">
                                        <img src={images.logoAppStore} alt="" width="150" />
                                    </a>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-12 img-center-apply">
                                    <a href="/#">
                                        <img src={images.logoAppGallery} alt="" width="150" />
                                    </a>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 col-md-3"></div>
                                <div className="col-2 col-md-2 img-center-apply">
                                    <a href="/#">
                                        <img src={images.logoFacebook} alt="facebook" width="32" />
                                    </a>
                                </div>
                                <div className="col-2 col-md-2 img-center-apply">
                                    <a href="/#">
                                        <img src={images.logoTwitter} alt="twitter" width="32" />
                                    </a>
                                </div>

                                <div className="col-2 col-md-2 img-center-apply">
                                    <a href="/#">
                                        <img src={images.LogoInstagram} alt="instagram" width="32" />
                                    </a>
                                </div>
                                <div className="col-2 col-md-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;