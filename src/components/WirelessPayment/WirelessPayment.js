import React, {useEffect} from 'react';
import images from '../../images';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import LineCharts from './LineCharts';
import './WirelessPaymente.css'


function WirelessPayment() {

    useEffect(() => {
        document.title = 'WIRELESS PAYMENT';
    }, []);

    return (
        <div>
            <Navbar />
            <div className="bg-color-degrade"></div>

            <div className="bg-color-white container-fuid">
                <div className="text-center">
                    <img className="circular--square" src={images.fotoDePerfil} alt="Foto de perfil" />
                </div>
                <div className="container text-center">
                    <h4 className="text-color-degrade">Your Balance</h4>
                    <h1 className="text-balance">$20,120.00</h1>
                    <div className="row">
                        <div className="col-6 col-md-6">
                            <div>
                                {/* <img src="../assets/images/wireless-payment/arrow-down.png" width="48" alt=""/> */}
                            </div>
                            <div>
                                <span className="text-income">$12,110.00 </span>
                                <p className="text-inc-exp">Income</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-6">
                            <div>
                                {/* <img src="../assets/images/wireless-payment/arrow-up.png" width="48" alt=""/> */}
                            </div>
                            <div>
                                <span className="text-income"> $14,340.00 </span>
                                <p className="text-inc-exp"> Expenses </p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row mb-5">
                        <div className="col-md-2"></div>
                        <div className="col-12 col-md-4"><button className="btn-withdrown"><span
                            className="btn-span-withdrown">Withdrow</span></button></div>
                        <div className="col-12 col-md-4"> <button className="btn-transfer"> <span
                            className="btn-span-Transfer">Transfer</span> </button></div>
                        <div className="col-md-2"></div>
                    </div>

                    <div>
                        <LineCharts />
                    </div>

                    <h4 className="text-color-degrade">Last activity</h4>

                    <div>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        {/* <img src="../assets/images/wireless-payment/LL.png" style="margin-right: 10px;"
                                                width="36" alt=""/> */}
                                        <div>
                                            <h3 className="user-history">Luisa Lopez </h3> <span
                                                className="crypto-type">DodgeCoins</span>
                                        </div>
                                    </th>
                                    <td> </td>
                                    <td> </td>
                                    <td className="amount-user">$120.00</td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        {/* <img src="../assets/images/wireless-payment/JA.png" style="margin-right: 10px;"
                                                width="36" alt=""/> */}
                                        <div>
                                            <h3 className="user-history">Josue Alvarado</h3> <span
                                                className="crypto-type">DodgeCoins</span>
                                        </div>
                                    </th>
                                    <td> </td>
                                    <td> </td>
                                    <td className="amount-user">$850.00</td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        {/* <img src="../assets/images/wireless-payment/AC.png" style="margin-right: 10px;"
                                                width="36" alt=""/> */}
                                        <div>
                                            <h3 className="user-history">Andrea Chuy</h3> <span
                                                className="crypto-type">DodgeCoins</span>
                                        </div>
                                    </th>
                                    <td> </td>
                                    <td> </td>
                                    <td className="amount-user">$310.00</td>
                                </tr>

                                <tr>
                                    <th scope="row">
                                        {/* <img src="../assets/images/wireless-payment/MV.png" style="margin-right: 10px;"
                                                width="36" alt=""/> */}
                                        <div>
                                            <h3 className="user-history">Marcos Valenzuela</h3> <span
                                                className="crypto-type">DodgeCoins</span>
                                        </div>
                                    </th>
                                    <td> </td>
                                    <td> </td>
                                    <td className="amount-user">$20.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}


export default WirelessPayment;