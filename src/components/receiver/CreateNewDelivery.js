import React, { Component } from "react";
import { Link } from "react-router-dom";
//import axios from "axios";

class CreateNewDelivery extends Component {
  render() {
    return (
      <div className="createDelivery">
        <div className="container">
          <div className="row">
            <div className="col-md-128 m-auto">
              <h4 className="mb-2 float-left">Create Delivery</h4>
              <br />
              <br />
              <br />

              <form>
                <div className="form-row">
                  <div className="form-group col-md-3">
                    <label htmlFor="delid">Delivery ID</label>
                    <input
                      type="text"
                      className="form-control"
                      id="delid"
                      readOnly
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="poid">PO ID</label>
                    <input
                      type="text"
                      className="form-control"
                      id="poid"
                      readOnly
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="supplier">Supplier</label>
                    <input type="text" className="form-control" id="supplier" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input type="text" className="form-control" id="address" />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-3">
                    <label htmlFor="createdOn">Created Date</label>
                    <input
                      type="Date"
                      className="form-control"
                      id="createdOn"
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="status">Delivery Status</label>
                    <select id="status" class="form-control">
                      <option selected>Choose...</option>
                      <option> In store </option>
                      <option> En Route </option>
                      <option> Delivered </option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label htmlFor="amount">Amount</label>
                    <input type="text" className="form-control" id="amount" />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="status">Payment Method</label>
                    <select id="status" class="form-control">
                      <option selected>Choose...</option>
                      <option> Visa/Master </option>
                      <option> Cash on Delivery </option>
                    </select>
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="amount">Payment Status</label>
                    <select id="status" class="form-control">
                      <option selected>Choose...</option>
                      <option> Not Completed </option>
                      <option> Completed </option>
                    </select>
                  </div>
                </div>
              </form>

              <br />
              <Link to="/login" className="btn btn-md btn-success">
                Create delivery
              </Link>

              <Link
                to="/viewDeliveryList"
                className="btn btn-md btn-info float-right"
              >
                View all deliveries
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateNewDelivery;
