import React from "react";
import './App.css';
import Homepage from './components/homepage/Homepage'
import SingIn from './components/singIn/SingIn'
import Dashboard from "./components/Dashboard/Dashboard";
import CreditPage from "./components/creditPage/CreditPage";
import WirelessPayment from "./components/WirelessPayment/WirelessPayment";
import Exchange from "./components/Exchange/Exchange";
import SingUp from "./components/singUp/SingUp";
import EditPerfile from "./components/editPerfile/EditPerfile";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// eslint-disable-next-line
import toast, { Toaster } from 'react-hot-toast';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}>
        </Route>
        <Route path="/Singin" element={<SingIn />}>
        </Route>
        <Route path="/Dashboard" element={<Dashboard />}>
        </Route>
        <Route path="/CreditPage" element={<CreditPage />}>
        </Route>
        <Route path="/WirelessPayment" element={<WirelessPayment />}>
        </Route>
        <Route path="/Exchange" element={<Exchange />}>
        </Route>
        <Route path="/SingUp" element={<SingUp />}>
        </Route>
        <Route path="/EditPerfile" element={<EditPerfile />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
