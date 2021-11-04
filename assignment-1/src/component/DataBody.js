import React, { Component } from "react";
export default class DataBody extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card-body card-body-style">
        <h2 className="card-title card-title-style">Name</h2>
        <div className="info">
          <p>
            <strong>Email: </strong>
          </p>
          <p>
            <strong>Phone: </strong>
          </p>
          <p>
            <strong>Company: </strong>
          </p>
          <p>
            <strong>Website: </strong>
          </p>
          <p>
            <strong>Address: </strong>
          </p>
        </div>
      </div>
    );
  }
}
