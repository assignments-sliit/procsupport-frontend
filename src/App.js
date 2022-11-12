import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

//import component layouts
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import Login from "./components/auth/Login";
import CreatePurchaseOrder from "./components/purchaser/CreatePurchaseOrder";
import ApprovedPurchaseList from "./components/purchaser/ApprovedPurchaseList";
import PRListView from "./components/requestor/PRListview";
import AddNewPR from "./components/requestor/AddNewPR";
import ApproverListView from "./components/approver/ApproverListView";
import ViewSelectedPRRecord from "./components/approver/ViewSelectedPRRecord";
import ReceiverListView from "./components/receiver/ViewDeliveryList";
import ViewSelectedDelivery from "./components/receiver/ViewSelectedDelivery";
import CreateNewDelivery from "./components/receiver/CreateNewDelivery";

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
              <Route
                exact
                path="/approvedPurchaseList"
                element={<ApprovedPurchaseList />}
              />
            </Routes>
            <Routes>
              <Route
                exact
                path="/createPurchaseOrder"
                element={<CreatePurchaseOrder />}
              />
            </Routes>
            <Routes>
              <Route
                exact
                path="/viewApproverList"
                element={<ApproverListView />}
              />
            </Routes>
            <Routes>
              <Route
                exact
                path="/viewSelectedPRRecord"
                element={<ViewSelectedPRRecord />}
              />
            </Routes>
            <Routes>
              <Route
                exact
                path="/viewDeliveryList"
                element={<ReceiverListView />}
              />
            </Routes>
            <Routes>
              <Route
                exact
                path="/viewSelectedDelivery"
                element={<ViewSelectedDelivery />}
              />
            </Routes>
            <Routes>
              <Route
                exact
                path="/createDelivery"
                element={<CreateNewDelivery />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
