import React, { Component } from "react";
//import { Link } from "react-router-dom";
//import axios from "axios";

class ReceiverListView extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      List: [],
      MasterChecked: false,
      SelectedList: [],
      prs: [],
    };
  }*/

  // Select/ UnSelect Table rows
  /*onMasterCheck(e) {
    let tempList = this.state.List;
    // Check/ UnCheck All Items
    tempList.map((receiver) => (receiver.selected = e.target.checked));*/

  //Update State
  /*this.setState({
      MasterChecked: e.target.checked,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }*/

  // Update List Item's state and Master Checkbox State
  /*onItemCheck(e, item) {
    let tempList = this.state.List;
    tempList.map((user) => {
      if (user.id === item.id) {
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
  }*/

  // Event to get selected rows(Optional)
  /*getSelectedRows() {
    this.setState({
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/delivery/all/started/")
      .then((response) => {
        this.setState({
          List: response.data.purchase_requests,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }*/

  render() {
    return (
      <div className="viewDeliveryList">
        <div className="container">
          <div className="row">
            <div className="col-md-128 m-auto">
              <h3 className="mb-2 float-left">Purchase Orders Deliveries</h3>
              <br />
              <br />
              <div className="table-responsive-lg">
                <table className="table">
                  <thead>
                    <tr>
                      <th></th>
                      <th scope="col">PO ID</th>
                      <th scope="col">Supplier</th>
                      <th scope="col">Address</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Created On</th>
                      <th scope="col">Delivery Status</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>

                <div
                  className="btn-toolbar float-right"
                  role="toolbar"
                  aria-label="Toolbar with button groups"
                >
                  <div
                    className="btn-group mr-2"
                    role="group"
                    aria-label="First group"
                  >
                    <button
                      className="btn btn-success float-right"
                      onClick={() => this.getSelectedRows()}
                    >
                      Create Delivery
                    </button>
                  </div>
                  <div
                    className="btn-group mr-2"
                    role="group"
                    aria-label="Second group"
                  >
                    <button
                      className="btn btn-primary float-right"
                      onClick={() => this.getSelectedRows()}
                    >
                      View Delivery details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReceiverListView;
