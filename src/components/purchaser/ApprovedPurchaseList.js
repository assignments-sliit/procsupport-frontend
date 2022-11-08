import React, { Component } from "react";

class ApprovedPurchaseList extends Component {
  render() {
    return (
      <div className="dark-overlay landing-inner text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-3 mb-4">Budget</h1>
              <hr />
              <p>populate budget here</p>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-6 col-md-2">
              <button type="button" class="btn btn-success">
                Create Purchse Order
              </button>
            </div>
            </div>
            <hr/>
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">PR ID</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Amount</th>
                <th scope="col">Created On</th>
                <th scope="col">Updated On</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                  </div>
                </th>
                <td>PR-001</td>
                <td>PR Name</td>
                <td>Blah blah</td>
                <td>LKR 4,000</td>
                <td>08/11/2022</td>
                <td>08/11/2022</td>
                <td>Approved</td>
              </tr>
              <tr>
                <th scope="row">
                <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                  </div>
                </th>
                <td>PR-001</td>
                <td>PR Name</td>
                <td>Blah blah</td>
                <td>LKR 4,000</td>
                <td>08/11/2022</td>
                <td>08/11/2022</td>
                <td>Approved</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ApprovedPurchaseList;
