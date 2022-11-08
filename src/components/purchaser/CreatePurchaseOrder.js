import React, { Component } from "react";

class CreatePurchaseOrder extends Component {
  render() {
    return (
      <div className="dark-overlay landing-inner text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-3 mb-4">Create Purchase Order</h1>
              <hr />
            </div>
          </div>
          <div class="row">
            <div class="col-6 col-md-2">
              <button type="button" class="btn btn-success">
                Save Purchse Order
              </button>
            </div>
            <div class="col-6 col-md-4">
              <button type="button" class="btn btn-warning">
                Cancle
              </button>
            </div>
          </div>
          <hr />
          <form>
            <div class="form-row">
              <div class="form-group col">
                <label for="poid">PO ID</label>
                <input type="text" class="form-control" id="poid" required />
              </div>
              <div class="form-group col">
                <label for="supplier">Supplier</label>
                <select id="supplier" class="form-control">
                  <option selected>Choose...</option>
                  <option>Supplier 01</option>
                  <option>Supplier 02</option>
                  <option>Supplier 03</option>
                </select>
              </div>
              <div class="form-group col">
                <label for="amount">Amount</label>
                <input type="text" class="form-control" id="amount" required />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col">
                <label for="createdon">Created On</label>
                <input type="date" class="form-control" id="createdon" required/>
              </div>
              <div class="form-group col-6">
                <label for="description">Description</label>
                <input
                  type="text"
                  class="form-control"
                  id="description"
                  required
                />
              </div>
              <div class="form-group col">
                <label for="prid">PR ID</label>
                <input type="text" class="form-control" id="prid" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreatePurchaseOrder;
