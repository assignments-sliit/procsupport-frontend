import React, { Component } from "react";
import { Link } from "react-router-dom";
//import axios from "axios";

const list = [
  {
    id: 1,
    selected: false,
    prid: "PR-001",
    prName: "PipeOrder01",
    description: "Need 10 pipes",
    amount: "1000",
    createdOn: "11/10/2022",
    updatedOn: "11/10/2022",
    status: "Pending",
  },
  // {
  //   id: 4,
  //   selected: false,
  //   prid: "PR001",
  //   prName: "Ervin Howell",
  //   description: "Shanna@melissa.tv",
  //   amount: "010-692-6593 x09125",
  //   createdOn: "anastasia.net",
  //   updatedOn: "anastasia.net",
  //   status: "Pending",
  // },
];

/*const pr = (props) => {
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

class ReceiverListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      List: list,
      MasterChecked: false,
      SelectedList: [],
    };
  }

  // Select/ UnSelect Table rows
  onMasterCheck(e) {
    let tempList = this.state.List;
    // Check/ UnCheck All Items
    tempList.map((receiver) => (receiver.selected = e.target.checked));

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
  }

  // Event to get selected rows(Optional)
  getSelectedRows() {
    this.setState({
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  /*constructor(props){
    super(props);
    this.state = {
      prs:[],
    }
  }
  componentDidMount() {
    axios.get('http://localhost:500/api/users/<link>')
    .then(response => {
      this.setState({
        prs: response.data
      })
    }).catch(function (error){
      console.log(error);
    })
  }
  prList(){
    return this.state.courses.map(function (currentPRs,i) {
        return <PR pr={currentPRs} key={i}/>
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
                      <th scope="col">PO Name</th>
                      <th scope="col">Supplier</th>
                      <th scope="col">Address</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Created On</th>
                      <th scope="col">Delivery Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.List.map((receiver) => (
                      <tr
                        key={receiver.id}
                        className={receiver.selected ? "selected" : ""}
                      >
                        <th scope="row">
                          <input
                            type="checkbox"
                            checked={receiver.selected}
                            className="form-check-input"
                            id="rowcheck{user.id}"
                            onChange={(e) => this.onItemCheck(e, receiver)}
                          />
                        </th>
                        <td>{receiver.prid}</td>
                        <td>{receiver.prName}</td>
                        <td>{receiver.description}</td>
                        <td>{receiver.amount}</td>
                        <td>{receiver.createdOn}</td>
                        <td>{receiver.updatedOn}</td>
                        <td>{receiver.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div
                  class="btn-toolbar float-right"
                  role="toolbar"
                  aria-label="Toolbar with button groups"
                >
                  <div
                    class="btn-group mr-2"
                    role="group"
                    aria-label="First group"
                  >
                    {/* <button
                      className="btn btn-success float-right"
                      onClick={() => this.getSelectedRows()}
                    >
                      Create Delivery
                    </button> */}
                    <Link className="btn btn-success" to="/createDelivery">
                      Create Delivery
                    </Link>
                  </div>
                  <div
                    class="btn-group mr-2"
                    role="group"
                    aria-label="Second group"
                  >
                    {/* <button
                      className="btn btn-primary float-right"
                      onClick={() => this.getSelectedRows()}
                    >
                      View Delivery details
                    </button> */}
                    <Link
                      className="btn btn-success"
                      to="/viewSelectedDelivery"
                    >
                      View Delivery details
                    </Link>
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
