import React, { Component } from "react";

import "../invoice.css";

class Invoice extends React.Component {
  getCurrentDate() {
    var tempDate = new Date();
    var date =
      tempDate.getFullYear() +
      "-" +
      (tempDate.getMonth() + 1) +
      "-" +
      tempDate.getDate();
    return date;
  }

  render() {
    return (
      // from https://www.bootdey.com/snippets/view/company-invoice
      <div className="page-content container">
        <div className=" px-0">
          <div className="row mt-4">
            <div className="col-12 col-lg-10 offset-lg-1">
              {/* <!-- .row --> */}

              <hr className="row brc-default-l1 mx-n1 mb-4" />

              <div className="row">
                <div className="col-sm-6">
                  <div>
                    <span className="text-sm text-grey-m2 align-middle">
                      To:{" "}
                    </span>
                    <span className="text-600 text-110 text-blue align-middle">
                      {this.props.result.customerName}
                    </span>
                  </div>
                </div>
                {/* <!-- /.col --> */}

                <div className="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                  <hr className="d-sm-none" />
                  <div className="text-grey-m2">
                    <div className="my-2">
                      <span className="text-600 text-90">Issue Date:</span>{" "}
                      {this.getCurrentDate()}
                    </div>
                  </div>
                </div>
                {/* <!-- /.col --> */}
              </div>

              <div className="mt-4">
                <div className="row text-600 text-white bgc-default-tp1 py-25">
                  <div className="d-none d-sm-block col-1">#</div>
                  <div className="col-9 col-sm-5">Description</div>
                  <div className="d-none d-sm-block col-4 col-sm-2">Qty</div>
                  <div className="d-none d-sm-block col-sm-2">Unit Price</div>
                  <div className="col-2">Amount</div>
                </div>

                <div className="text-95 text-secondary-d3">
                  {this.props.result.itemList.map((item) => (
                    <div key={item.item.id} className="row mb-2 mb-sm-0 py-25">
                      <div className="d-none d-sm-block col-1">
                        {item.item.id}
                      </div>
                      <div className="col-9 col-sm-5">
                        {item.item.description}
                      </div>
                      <div className="d-none d-sm-block col-2">
                        {item.quantity}
                      </div>
                      <div className="d-none d-sm-block col-2 text-95">
                        ${item.item.price}
                      </div>
                      <div className="col-2 text-secondary-d2">
                        ${item.total}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="row border-b-2 brc-default-l2"></div>

                <div className="row mt-3">
                  <div className="col-12 col-sm-7 text-grey-d2 text-95 mt-2 mt-lg-0"></div>

                  <div className="col-12 col-sm-5 text-grey text-90 order-first order-sm-last">
                    <div className="row my-2">
                      <div className="col-7 text-right">SubTotal</div>
                      <div className="col-5">
                        <span className="text-120 text-secondary-d1">
                          ${this.props.result.subTotal}
                        </span>
                      </div>
                    </div>

                    <div className="row my-2">
                      <div className="col-7 text-right">Tax</div>
                      <div className="col-5">
                        <span className="text-110 text-secondary-d1">
                          ${this.props.result.tax}
                        </span>
                      </div>
                    </div>

                    <div className="row my-2 align-items-center bgc-primary-l3 p-2">
                      <div className="col-7 text-right">Total Amount</div>
                      <div className="col-5">
                        <span className="text-150 text-success-d3 opacity-2">
                          ${this.props.result.totalPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <hr />

                <div>
                  <button
                    onClick={this.props.onReset}
                    className="btn btn-secondary btn-bold px-4 float-right mt-3 mt-lg-0"
                  >
                    New Invoice
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Invoice;
