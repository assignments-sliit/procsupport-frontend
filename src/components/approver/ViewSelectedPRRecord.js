import React, { Component } from "react";
import { Link } from "react-router-dom";
import withRouter from "../../HOC/withRouter";
import axios from "axios";

//var DatePicker = require("react-bootstrap-date-picker");

class ViewSelectedPRRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pr: null,
    };

    this.approvePR = this.approvePR.bind(this);
  }

  componentDidMount() {
    this.getPRRecord(this?.props?.params?.id);
  }

  async getPRRecord(priId) {
    const response = await axios.get(
      `http://localhost:5000/api/pr/get/pr/${priId}`
    );

    if (response.status === 200) {
      this.setState({
        pr: response.data.purchase_request,
      });
    }
  }

  approvePR() {
    axios
      .put("http://localhost:5000/api/pr/status/approve", {
        token: localStorage.getItem("token"),
        prid: this.state.pr?.prid,
      })
      .then((response) => {
        if (response.status === 200) {
          this.props.navigate("/viewApproverList");
        }
      })
      .catch((error) => {});
  }

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
                      value={this.state.pr?.prid}
                    />
                  </div>
                  <div className="form-group col-md-9">
                    <label htmlFor="prName">PR Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="prName"
                      readOnly
                      value={this.state.pr?.prName}
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
                    value={this.state.pr?.description}
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
                      value={this.state.pr?.createdOn}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="status">Status</label>
                    <input
                      type="text"
                      className="form-control"
                      id="status"
                      readOnly
                      value={this.state.pr?.status}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="amount">Amount</label>
                    <input
                      type="text"
                      className="form-control"
                      id="amount"
                      readOnly
                      value={this.state.pr?.amount}
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
                        value={this.state.pr?.prName}
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
              {this.state.pr?.status === "NEW" && (
                <>
                  <button
                    onClick={this.approvePR}
                    className="btn btn-md btn-success float-left"
                  >
                    Approve purchase request
                  </button>

                  <button className="btn btn-md btn-danger">
                    Reject purchase request
                  </button>
                </>
              )}

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

export default withRouter(ViewSelectedPRRecord);
