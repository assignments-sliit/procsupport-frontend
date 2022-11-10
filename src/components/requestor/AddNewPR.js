import React, { Component } from "react";
import { Link } from "react-router-dom";
//import axios from "axios";

class AddNewPR extends Component {
  render() {
    return (
      <div className="addNewPR">
        <div className="container">
          <div className="row">
            <div className="col-md-128 m-auto">
              <h5 className="display-4 text-left">Your Purchase Requests</h5>
              <br />
              <div className="table-responsive-lg">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">PR ID</th>
                      <th scope="col">PR Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Created On</th>
                      <th scope="col">Updated On</th>
                      <th scope="col">Status</th>
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
                    <tr>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>@fat</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <Link
                to="/viewPRList"
                className="btn btn-md btn-info float-right"
              >
                {" "}
                View all purchase requests
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddNewPR;
