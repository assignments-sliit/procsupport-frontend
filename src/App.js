import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

//import component layouts
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import Login from "./components/auth/Login";
import PRListView from "./components/requestor/PRListview";
import AddNewPR from "./components/requestor/AddNewPR";
import CreatePurchaseOrder from "./components/purchaser/CreatePurchaseOrder";
import ApprovedPurchaseList from "./components/purchaser/ApprovedPurchaseList";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Landing />} />
          </Routes>
          <div className="container">
            <Routes>
              <Route exact path="/login" element={<Login />} />
            </Routes>
            <Routes>
              <Route exact path="/viewPRList" element={<PRListView />} />
            </Routes>
            <Routes>
              <Route exact path="/addNewPR" element={<AddNewPR />} />
             </Routes>
            <Routes>
              <Route exact path="/approvedPurchaseList" element={<ApprovedPurchaseList />} />
            </Routes>
            <Routes>
              <Route exact path="/createPurchaseOrder" element={<CreatePurchaseOrder />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
