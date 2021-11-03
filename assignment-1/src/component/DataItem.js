import React, { Component } from "react";

export default class DataItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allData: this.props.allData,
    };
    console.log("constructor dataitem");
    console.log(this.state);
  }
  render() {
    return (
      <div className="card card-style">
        <div className=" card-horizontal">
          <div className="img-square-wrapper p-2">
            <img
              className="profile-img"
              src="http://via.placeholder.com/300x180"
              alt=""
            />
          </div>
          <div className="card-body card-body-style">
            <h2 className="card-title card-title-style">
              {this.state.allData.name}
            </h2>
            <div className="info">
              <p>
                <strong>Email: </strong>
                {this.state.allData.email}
              </p>
              <p>
                <strong>Phone: </strong>
                {this.state.allData.phone}
              </p>
              <p>
                <strong>Company: </strong>
                {this.state.allData.company}
              </p>
              <p>
                <strong>Website: </strong>
                {this.state.allData.website}
              </p>
              <p>
                <strong>Address: </strong>
                {this.state.allData.address.street},{" "}
                {this.state.allData.address.suite},
                {this.state.allData.address.city},{" "}
                {this.state.allData.address.zipcode}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    //console.log("componentDidMount - product");
  }
}
