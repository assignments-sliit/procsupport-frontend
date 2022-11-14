import React, { Component } from "react";
import { Link } from "react-router-dom";
//import axios from "axios";

//var DatePicker = require("react-bootstrap-date-picker");

class AddNewPR extends Component {
  render() {
    return (
      <div className="addNewPR">
        <div className="container">
          <div className="row">
            <div className="col-md-128 m-auto">
              <h4 className="mb-2 float-left">Add New Purchase Request</h4>
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
                      // readOnly
                    />
                  </div>
                  <div className="form-group col-md-9">
                    <label htmlFor="prName">PR Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="prName"
                      placeholder="Purchase request name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    placeholder="Purpose of the purchase"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label htmlFor="createdOn">Created Date</label>
                    <input
                      type="Date"
                      className="form-control"
                      id="createdOn"
                      placeholder="dd-mm-yyyy"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="status">Status</label>
                    <select id="status" class="form-control">
                      <option>Choose...</option>
                      <option selected> New </option>
                    </select>
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
                        // readOnly
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
                        <td>
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            id="reqId"
                            // readOnly
                          />
                        </td>
                        <td>
                          <select id="materialType" class="form-control">
                            <option selected>Choose...</option>
                            <option > Cement </option>
                            <option > Sand </option>
                            <option > Pipes </option>
                          </select>
                        </td>
                        <td>
                          <select id="materialName" class="form-control">
                            <option selected>Choose...</option>
                            <option > Holcim Cement </option>
                            <option > DSI Pipe </option>
                            <option > Kientic Sand</option>
                          </select>
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            id="quantity"
                          />
                        </td>
                        <td>
                          <select id="quantityUOM" class="form-control">
                            <option selected>Choose...</option>
                            <option > 1kg Packs </option>
                            <option > 20kg Packs </option>
                            <option > 50kg Packs </option>
                            <option > 100kg Packs </option>
                          </select>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            id="unitPrice"
                            // readOnly
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            id="TotalPrice"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </form>

              <br />
              <Link className="btn btn-md btn-success float-right">
                {" "}
                Submit new purchase request
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddNewPR;
