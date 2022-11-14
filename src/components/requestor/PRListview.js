import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

/*const PR = (props) => {
  <tr>
    <td>{props.pr.prid}</td>
    <td>{props.pr.prName}</td>
    <td>{props.pr.description}</td>
    <td>{props.pr.amount}</td>
    <td>{props.pr.createdOn}</td>
    <td>{props.pr.updatedOn}</td>
    <td>{props.pr.status}</td>
  </tr>;
};*/

class PRListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      List: [],
      MasterChecked: false,
      SelectedList: [],
      prs: [],
    };
  }

  // Select/ UnSelect Table rows
  onMasterCheck(e) {
    let tempList = this.state.List;
    // Check/ UnCheck All Items
    tempList.map((requestor) => (requestor.selected = e.target.checked));

    //Update State
    this.setState({
      MasterChecked: e.target.checked,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  // Update List Item's state and Master Checkbox State
  onItemCheck(e, item) {
    let tempList = this.state.List;
    tempList.map((user) => {
      console.log("-------------", user, item);
      if (user._id === item._id) {
        user.selected = e.target.checked;
      }
      return user;
    });

    //To Control Master Checkbox State
    const totalItems = this.state.List.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;

    // Update State
    this.setState({
      MasterChecked: totalItems === totalCheckedItems,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/pr/get/all")
      .then((response) => {
        this.setState({
          List: response.data.purchase_requests,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="viewPRList">
        <div className="container">
          <div className="row">
            <div className="col-md-128 m-auto">
              <h3 className="mb-2 float-left">Your Purchase Requests</h3>
              <br />
              <br />
              <div className="table-responsive-lg">
                <table className="table">
                  <thead>
                    <tr>
                      <th></th>
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
                    {this.state.List.map((requestor) => (
                      <tr
                        key={requestor.id}
                        className={requestor.selected ? "selected" : ""}
                      >
                        <th scope="row">
                          <input
                            type="checkbox"
                            checked={requestor.selected}
                            className="form-check-input"
                            id="rowcheck{user.id}"
                            onChange={(e) => this.onItemCheck(e, requestor)}
                          />
                        </th>
                        <td>{requestor.prid}</td>
                        <td>{requestor.prName}</td>
                        <td>{requestor.description}</td>
                        <td>{requestor.amount}</td>
                        <td>{requestor.createdOn}</td>
                        <td>{requestor.updatedOn}</td>
                        <td>{requestor.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <br />
              <Link to="/addNewPR" className="btn btn-md btn-info float-right">
                <i className="fa-duotone fa-plus"></i> Add Purchase Request
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PRListView;
