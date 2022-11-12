import React, { Component } from "react";
import { Link } from "react-router-dom";
//import axios from "axios";

//var DatePicker = require("react-bootstrap-date-picker");

class ViewSelectedPRRecord extends Component {
  render() {
    return (
      <div className="viewSelectedPRRecord">
        <div className="container">
          <div className="row">
            <div className="col-md-128 m-auto">
              <h4 className="mb-2 float-left">Purchase Request</h4>
              <br />
              <br />
              <br />

              <form>
                <div className="form-row">
                  <div className="form-group col-md-3">
                    <label htmlFor="prid">PR ID</label>
                    <input
                      type="text"
                      className="form-control"
                      id="prid"
                      readOnly
                    />
                  </div>
                  <div className="form-group col-md-9">
                    <label htmlFor="prName">PR Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="prName"
                      readOnly
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    readOnly
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label htmlFor="createdOn">Created Date</label>
                    <input
                      type="Date"
                      className="form-control"
                      id="createdOn"
                      readOnly
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="status">Status</label>
                    <input
                      type="text"
                      className="form-control"
                      id="status"
                      readOnly
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="amount">Amount</label>
                    <input
                      type="text"
                      className="form-control"
                      id="amount"
                      readOnly
                    />
                  </div>
                </div>
                <hr />
                <h5 className="mb-2 float-left">Materials details</h5>
                <div className="table-responsive-lg">
                  <br />
                  <div className="form-row float-right">
                    <div className="form-group col-md-4">
                      <label htmlFor="prid">Total Material Cost</label>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="prName"
                        readOnly
                      />
                    </div>
                  </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Requirement ID</th>
                        <th scope="col">Material Type</th>
                        <th scope="col">Material Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Quantity UOM</th>
                        <th scope="col">Unit Price</th>
                        <th scope="col">Total Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>This is a lengthy description</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </form>

              <br />
              <Link to="/login" className="btn btn-md btn-success float-left">
                Approve purchase request
              </Link>

              <Link to="/login" className="btn btn-md btn-danger">
                Reject purchase request
              </Link>

              <Link
                to="/viewApproverList"
                className="btn btn-md btn-info float-right"
              >
                View all purchase requests
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewSelectedPRRecord;
