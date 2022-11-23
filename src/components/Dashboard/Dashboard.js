import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import './Dashboard.css'

function Dashboard() {
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="row">

                    <button className="btn btn-dark rounded-0 btn-sidebarMenu" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu"
                        aria-expanded="false" aria-controls="sidebarMenu">
                        Menu
                        <i className="bi bi-caret-down-fill ms-1"></i>
                    </button>

                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div className="position-sticky pt-3 ms-3">
                            <ul className="list-unstyled ps-0">
                                <li className="mb-1">
                                    <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                                        data-bs-target="#home-collapse" aria-expanded="true">
                                        <i className="bi bi-coin me-1 fs-5"></i>
                                        Cash
                                    </button>
                                    <div className="collapse show" id="home-collapse">
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <li><a href="/#" className="link-dark rounded">Overview</a></li>
                                            <li><a href="/#" className="link-dark rounded">Updates</a></li>
                                            <li><a href="/#" className="link-dark rounded">Reports</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="mb-1">
                                    <button className="btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                                        data-bs-target="#dashboard-collapse" aria-expanded="false">
                                        <i className="bi bi-credit-card-2-back-fill me-1 fs-5"></i>
                                        Card
                                    </button>
                                    <div className="collapse" id="dashboard-collapse">
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <li><a href="/#" className="link-dark rounded">Overview</a></li>
                                            <li><a href="/#" className="link-dark rounded">Weekly</a></li>
                                            <li><a href="/#" className="link-dark rounded">Monthly</a></li>
                                            <li><a href="/#" className="link-dark rounded">Annually</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="mb-1">
                                    <button className="btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                                        data-bs-target="#expenses-collapse" aria-expanded="false">
                                        <i className="bi bi-wallet2 me-1 fs-5"></i>
                                        Expenses
                                    </button>
                                    <div className="collapse" id="expenses-collapse">
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <li><a href="/#" className="link-dark rounded">New</a></li>
                                            <li><a href="/#" className="link-dark rounded">Processed</a></li>
                                            <li><a href="/#" className="link-dark rounded">Shipped</a></li>
                                            <li><a href="/#" className="link-dark rounded">Returned</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="mb-1">
                                    <button className="btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                                        data-bs-target="#reports-collapse" aria-expanded="false">
                                        <i className="bi bi-clipboard2-data-fill me-1 fs-5"></i>
                                        Reports
                                    </button>
                                    <div className="collapse" id="reports-collapse">
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <li><a href="/#" className="link-dark rounded">New</a></li>
                                            <li><a href="/#" className="link-dark rounded">Processed</a></li>
                                            <li><a href="/#" className="link-dark rounded">Shipped</a></li>
                                            <li><a href="/#" className="link-dark rounded">Returned</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="mb-1">
                                    <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                                        data-bs-target="#team-collapse" aria-expanded="false">
                                        <i className="bi bi-people-fill me-1 fs-5"></i>
                                        Team
                                    </button>
                                    <div className="collapse" id="team-collapse">
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <li><a href="/#" className="link-dark rounded">New</a></li>
                                            <li><a href="/#" className="link-dark rounded">Processed</a></li>
                                            <li><a href="/#" className="link-dark rounded">Shipped</a></li>
                                            <li><a href="/#" className="link-dark rounded">Returned</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="mb-1">
                                    <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                                        data-bs-target="#integrations-collapse" aria-expanded="false">
                                        <i className="bi bi-puzzle-fill me-1 fs-5"></i>
                                        Integrations
                                    </button>
                                    <div className="collapse" id="integrations-collapse">
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <li><a href="/#" className="link-dark rounded">New</a></li>
                                            <li><a href="/#" className="link-dark rounded">Processed</a></li>
                                            <li><a href="/#" className="link-dark rounded">Shipped</a></li>
                                            <li><a href="/#" className="link-dark rounded">Returned</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="mb-1">
                                    <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                                        data-bs-target="#orders-collapse" aria-expanded="false">
                                        <i className="bi bi-star me-1 fs-5"></i>
                                        Rewards
                                    </button>
                                    <div className="collapse" id="orders-collapse">
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <li><a href="/#" className="link-dark rounded">New</a></li>
                                            <li><a href="/#" className="link-dark rounded">Processed</a></li>
                                            <li><a href="/#" className="link-dark rounded">Shipped</a></li>
                                            <li><a href="/#" className="link-dark rounded">Returned</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </nav>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div
                            className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Dashboard</h1>
                            <div className="btn-toolbar mb-2 mb-md-0">
                                <div className="btn-group me-2">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                                </div>
                                <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                    This week
                                </button>
                            </div>
                        </div>

                        <div className="col-6">
                            <select className="form-select" aria-label="Default select example" defaultValue={"0"}>
                                <option value="0">Open this select menu</option>
                                <option value="1"> One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>


                        <div className="bg-light rounded-3 mb-3 mt-3 col-12 col-md-12">
                            <div className="row">
                                <div className="col-6 col-sm-6 col-md-4 text-center  mt-2 mb-2">
                                    <p className="text-title">Available balance</p>
                                    <h3 className="text-sec">$300,00.00</h3>
                                    <button className="banner-btn">View details <i className="bi bi-chevron-right icon-degrade"></i></button>
                                </div>
                                <div className="col-6 col-sm-6 col-md-4 text-center  mt-2 mb-2">
                                    <p className="text-title">Account details</p>
                                    <h3 className="text-sec">*** *** 1234</h3>
                                    <button className="banner-btn">View details <i className="bi bi-chevron-right icon-degrade"></i></button>
                                </div>
                                <div className="col-12 col-sm-12 col-md-4 text-center mt-2 mb-2">
                                    <p className="text-title">Instant revenue</p>
                                    <h3 className="text-sec">$50,000.00</h3>
                                    <button className="banner-btn">Get Paid <i className="bi bi-chevron-right icon-degrade"></i></button>
                                </div>
                            </div>
                        </div>

                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button className="nav-link active" id="nav-completed-tab" data-bs-toggle="tab" data-bs-target="#nav-completed" type="button" role="tab" aria-controls="nav-completed" aria-selected="true">Completed</button>
                                <button className="nav-link" id="nav-scheduled-tab" data-bs-toggle="tab" data-bs-target="#nav-scheduled" type="button" role="tab" aria-controls="nav-scheduled" aria-selected="false">Scheduled</button>
                                <button className="nav-link" id="nav-canceled-tab" data-bs-toggle="tab" data-bs-target="#nav-canceled" type="button" role="tab" aria-controls="nav-canceled" aria-selected="false">Canceled</button>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-completed" role="tabpanel" aria-labelledby="nav-completed-tab">
                                <div className="input-group mb-3 mt-3">
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon1"><i className="bi bi-search"></i></button>
                                    <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                                </div>
                                <h2>Processing transactions 4 of 4</h2>
                                <div className="table-responsive">
                                    <table className="table table-striped table-sm">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="text-table">Date</th>
                                                <th scope="col" className="text-table">To/From</th>
                                                <th scope="col" className="text-table">Method</th>
                                                <th scope="col" className="text-table">Amount</th>
                                                <th scope="col" className="text-table">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Nov 18</td>
                                                <td>Carlos Osuna</td>
                                                <td>Check</td>
                                                <td>-$10,000.00</td>
                                                <td className="text-table-td">Processing</td>
                                            </tr>
                                            <tr>
                                                <td>Nov 18</td>
                                                <td>Carlos Osuna</td>
                                                <td>Check</td>
                                                <td>$10,000.00</td>
                                                <td className="text-table-td">Processing</td>
                                            </tr>
                                            <tr>
                                                <td>Nov 18</td>
                                                <td>Carlos Osuna</td>
                                                <td>Check</td>
                                                <td>-$10,000.00</td>
                                                <td className="text-table-td">Processing</td>
                                            </tr>
                                            <tr>
                                                <td>Nov 18</td>
                                                <td>Carlos Osuna</td>
                                                <td>Check</td>
                                                <td>$10,000.00</td>
                                                <td className="text-table-td">Processing</td>
                                            </tr>
                                            <tr>
                                                <td>Nov 18</td>
                                                <td>Carlos Osuna</td>
                                                <td>Check</td>
                                                <td>$10,000.00</td>
                                                <td className="text-table-td">Processing</td>
                                            </tr>
                                            <tr>
                                                <td>Nov 18</td>
                                                <td>Carlos Osuna</td>
                                                <td>Check</td>
                                                <td>$10,000.00</td>
                                                <td className="text-table-td">Processing</td>
                                            </tr>
                                            <tr>
                                                <td>Nov 18</td>
                                                <td>Carlos Osuna</td>
                                                <td>Check</td>
                                                <td>$10,000.00</td>
                                                <td className="text-table-td">Processing</td>
                                            </tr>
                                            <tr>
                                                <td>Nov 18</td>
                                                <td>Carlos Osuna</td>
                                                <td>Check</td>
                                                <td>$10,000.00</td>
                                                <td className="text-table-td">Processing</td>
                                            </tr>
                                            <tr>
                                                <td>Nov 18</td>
                                                <td>Carlos Osuna</td>
                                                <td>Check</td>
                                                <td>$10,000.00</td>
                                                <td className="text-table-td">Processing</td>
                                            </tr>
                                            <tr>
                                                <td>Nov 18</td>
                                                <td>Carlos Osuna</td>
                                                <td>Check</td>
                                                <td>$10,000.00</td>
                                                <td className="text-table-td">Processing</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-scheduled" role="tabpanel" aria-labelledby="nav-scheduled-tab">
                                <h2>Processing transactions 4 of 4</h2>
                                <div className="table-responsive">
                                    <table className="table table-striped table-sm">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="text-table">Date</th>
                                                <th scope="col" className="text-table">To/From</th>
                                                <th scope="col" className="text-table">Method</th>
                                                <th scope="col" className="text-table">Amount</th>
                                                <th scope="col" className="text-table">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Nov 18</td>
                                                <td>Carlos Osuna</td>
                                                <td>Check</td>
                                                <td>-$10,000.00</td>
                                                <td className="text-table-td">Processing</td>
                                            </tr>
                                            <tr>
                                                <td>Nov 18</td>
                                                <td>Carlos Osuna</td>
                                                <td>Check</td>
                                                <td>$10,000.00</td>
                                                <td className="text-table-td">Processing</td>
                                            </tr>
                                            <tr>
                                                <td>Nov 18</td>
                                                <td>Carlos Osuna</td>
                                                <td>Check</td>
                                                <td>-$10,000.00</td>
                                                <td className="text-table-td">Processing</td>
                                            </tr>
                                            <tr>
                                                <td>Nov 18</td>
                                                <td>Carlos Osuna</td>
                                                <td>Check</td>
                                                <td>$10,000.00</td>
                                                <td className="text-table-td">Processing</td>
                                            </tr>
                                            <tr>
                                                <td>Nov 18</td>
                                                <td>Carlos Osuna</td>
                                                <td>Check</td>
                                                <td>$10,000.00</td>
                                                <td className="text-table-td">Processing</td>
                                            </tr>
                                            <tr>
                                                <td>Nov 18</td>
                                                <td>Carlos Osuna</td>
                                                <td>Check</td>
                                                <td>$10,000.00</td>
                                                <td className="text-table-td">Processing</td>
                                            </tr>
                                            <tr>
                                                <td>Nov 18</td>
                                                <td>Carlos Osuna</td>
                                                <td>Check</td>
                                                <td>$10,000.00</td>
                                                <td className="text-table-td">Processing</td>
                                            </tr>
                                            <tr>
                                                <td>Nov 18</td>
                                                <td>Carlos Osuna</td>
                                                <td>Check</td>
                                                <td>$10,000.00</td>
                                                <td className="text-table-td">Processing</td>
                                            </tr>
                                            <tr>
                                                <td>Nov 18</td>
                                                <td>Carlos Osuna</td>
                                                <td>Check</td>
                                                <td>$10,000.00</td>
                                                <td className="text-table-td">Processing</td>
                                            </tr>
                                            <tr>
                                                <td>Nov 18</td>
                                                <td>Carlos Osuna</td>
                                                <td>Check</td>
                                                <td>$10,000.00</td>
                                                <td className="text-table-td">Processing</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-canceled" role="tabpanel" aria-labelledby="nav-canceled-tab">
                                <h2>Processing transactions 4 of 4</h2>
                                <div className="table-responsive">
                                    <table className="table table-striped table-sm">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="text-table">Date</th>
                                                <th scope="col" className="text-table">To/From</th>
                                                <th scope="col" className="text-table">Method</th>
                                                <th scope="col" className="text-table">Amount</th>
                                                <th scope="col" className="text-table">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Nov 18</td>
                                                <td>Carlos Osuna</td>
                                                <td>Check</td>
                                                <td>-$10,000.00</td>
                                                <td className="text-table-td">Processing</td>
                                            </tr>
                                            <tr>
                                                <td>Nov 18</td>
                                                <td>Carlos Osuna</td>
                                                <td>Check</td>
                                                <td>$10,000.00</td>
                                                <td className="text-table-td">Processing</td>
                                            </tr>
                                            <tr>
                                                <td>Nov 18</td>
                                                <td>Carlos Osuna</td>
                                                <td>Check</td>
                                                <td>-$10,000.00</td>
                                                <td className="text-table-td">Processing</td>
                                            </tr>
                                            <tr>
                                                <td>Nov 18</td>
                                                <td>Carlos Osuna</td>
                                                <td>Check</td>
                                                <td>$10,000.00</td>
                                                <td className="text-table-td">Processing</td>
                                            </tr>
                                            <tr>
                                                <td>Nov 18</td>
                                                <td>Carlos Osuna</td>
                                                <td>Check</td>
                                                <td>$10,000.00</td>
                                                <td className="text-table-td">Processing</td>
                                            </tr>
                                            <tr>
                                                <td>Nov 18</td>
                                                <td>Carlos Osuna</td>
                                                <td>Check</td>
                                                <td>$10,000.00</td>
                                                <td className="text-table-td">Processing</td>
                                            </tr>
                                            <tr>
                                                <td>Nov 18</td>
                                                <td>Carlos Osuna</td>
                                                <td>Check</td>
                                                <td>$10,000.00</td>
                                                <td className="text-table-td">Processing</td>
                                            </tr>
                                            <tr>
                                                <td>Nov 18</td>
                                                <td>Carlos Osuna</td>
                                                <td>Check</td>
                                                <td>$10,000.00</td>
                                                <td className="text-table-td">Processing</td>
                                            </tr>
                                            <tr>
                                                <td>Nov 18</td>
                                                <td>Carlos Osuna</td>
                                                <td>Check</td>
                                                <td>$10,000.00</td>
                                                <td className="text-table-td">Processing</td>
                                            </tr>
                                            <tr>
                                                <td>Nov 18</td>
                                                <td>Carlos Osuna</td>
                                                <td>Check</td>
                                                <td>$10,000.00</td>
                                                <td className="text-table-td">Processing</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard;