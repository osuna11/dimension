import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer"
import Carousel from "./Carousel";
import Main from './Main'
import images from "../../images";
import './Homepage.css'

function Homepage() {
    return (
        <div>
            <Navbar />
            <Carousel
                img1={images.metaversoChica}
                img2={images.metaversoChica}
                img3={images.metaversoChica}
            />
            <Main />
            <Footer />
        </div>
    );
}

export default Homepage;