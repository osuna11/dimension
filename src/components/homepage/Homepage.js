import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer"
import Carousel from "./Carousel";
import Main from './Main'
import images from "../../images";
import LoaderSpineer from "../LoaderSpinner/LoaderSpinner";
import './Homepage.css'



function Homepage() {


    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        document.title = 'DIMENSION';
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    return (
        <div>
            {loading ?
                <LoaderSpineer />
                :
                <div>
                    <Navbar />
                    <Carousel img1={images.metaversoChica} img2={images.metaversoChica} img3={images.metaversoChica} />
                    <Main />
                    <Footer />
                </div>
            }
        </div>
    );
}

export default Homepage;