import React, { Component } from "react";
import axios from "axios";

class CreatePurchaseOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      poid: "",
      supplier: "",
      amount: "",
      createdon: "",
      description: "",
      prid: "",
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangepoid = this.onChangepoid.bind(this);
    this.onChangesupplier = this.onChangesupplier.bind(this);
    this.onChangeamount = this.onChangeamount.bind(this);
    this.onChangecreatedon = this.onChangecreatedon.bind(this);
    this.onChangedescription = this.onChangedescription.bind(this);
    this.onChangeprid = this.onChangeprid.bind(this);
  }

  onChangepoid(e) {
    this.setState({
      poid: e.target.value,
    });
  }

  onChangesupplier(e) {
    this.setState({
      supplier: e.target.value,
    });
  }

  onChangeamount(e) {
    this.setState({
      amount: e.target.value,
    });
  }

  onChangecreatedon(e) {
    this.setState({
      createdon: e.target.value,
    });
  }

  onChangedescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeprid(e) {
    this.setState({
      prid: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const new_PO = {
      poid: this.state.poid,
      supplier: this.state.supplier,
      amount: this.state.amount,
      createdon: this.state.createdon,
      description: this.state.description,
      prid: this.state.prid,
    };

    axios
      .post("http://localhost:5000/api/po/create", new_PO)
      .then((res) => console.log(res.data))
      .catch((err) => this.setState({ errors: err.response.data }));

    this.setState({
      poid: "",
      supplier: "",
      amount: "",
      createdon: "",
      description: "",
      prid: "",
    });

    getMaterial();
  }

  render() {
    return (
      <div className="createPurchaseOrder">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-3 mb-4">Create Purchase Order</h1>
              <hr />
            </div>
          </div>
          <form onSubmit={this.onSubmit}>
            <div class="row">
              <div class="col-6 col-md-2">
                <button type="submit" class="btn btn-success">
                  Save Purchse Order
                </button>
              </div>
              <div class="col-6 col-md-4">
                <button type="cancle" class="btn btn-warning">
                  Cancle
                </button>
              </div>
            </div>
            <hr />
            <div class="form-row">
              <div class="form-group col">
                <label for="poid">PO ID</label>
                <input
                  type="text"
                  class="form-control"
                  id="poid"
                  value={this.state.poid}
                  onChange={this.onChangepoid}
                  required
                />
              </div>
              <div class="form-group col">
                <label for="supplier">Supplier</label>
                <select
                  id="supplier"
                  class="form-control"
                  value={this.state.supplier}
                  onChange={this.onChangesupplier}
                >
                  <option selected>Choose...</option>
                  <option>Supplier 01</option>
                  <option>Supplier 02</option>
                  <option>Supplier 03</option>
                </select>
              </div>
              <div class="form-group col">
                <label for="amount">Amount</label>
                <input
                  type="text"
                  class="form-control"
                  id="amount"
                  value={this.state.amount}
                  onChange={this.onChangeamount}
                  required
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col">
                <label for="createdon">Created On</label>
                <input
                  type="date"
                  class="form-control"
                  id="createdon"
                  value={this.state.createdon}
                  onChange={this.onChangecreatedon}
                  required
                />
              </div>
              <div class="form-group col-6">
                <label for="description">Description</label>
                <input
                  type="text"
                  class="form-control"
                  id="description"
                  value={this.state.description}
                  onChange={this.onChangedescription}
                  required
                />
              </div>
              <div class="form-group col">
                <label for="prid">PR ID</label>
                <input
                  type="text"
                  class="form-control"
                  id="prid"
                  value={this.state.prid}
                  onChange={this.onChangeprid}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreatePurchaseOrder;

const getMaterial = () => {
  return (
    <div>
      <h4>Materials</h4>
      <h3>Total Material Cost: LKR 23000</h3>
      <table>
        <thead>
          <tr>
            <th>Requirement Id</th>
            <th>Material Type</th>
            <th>Date</th>
            <th>Material Name</th>
            <th>Quantity</th>
            <th>Quantity UoM</th>
            <th>Unit Price</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {/* {getMaterial.map(render_getMaterial)}  */}
          <tr>
            <td>Requirement Id</td>
            <td>Material Type</td>
            <td>Date</td>
            <td>Material Name</td>
            <td>Quantity</td>
            <td>Quantity UoM</td>
            <td>Unit Price</td>
            <td>Total Price</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
