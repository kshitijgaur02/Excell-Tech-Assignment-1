import React, { Component } from "react";
import DataImageItem from "./DataImageItem";

export default class DataItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allData: { userData: this.props.allData, userImage: [] },
    };
    console.log("constructor dataitem ", this.state.allData);
  }

  // componentDidMount = async () => {
  //   var response = await fetch(
  //     "https://avatars.dicebear.com/v2/avataaars/{{this.state.allData.userData.username}}.svg?options[mood][]=happy",
  //     {
  //       method: "GET",
  //     }
  //   );
  //   var information = await response.json();
  //   console.log("didmount dataitem", information);
  //   this.setState({ ...this.state.allData, userImage: information });
  // };

  render() {
    console.log("render DataItem");
    return (
      <div className="card card-style">
        <div className=" card-horizontal">
          {this.state.allData.userImage.map((info) => {
            return <DataImageItem cardDataImage={info} />;
          })}
          <div className="card-body card-body-style">
            <h2 className="card-title card-title-style">
              {this.state.allData.userData.name}
            </h2>
            <div className="info">
              <p>
                <strong>Email: </strong>
                {this.state.allData.userData.email}
              </p>
              <p>
                <strong>Phone: </strong>
                {this.state.allData.userData.phone}
              </p>
              <p>
                <strong>Company: </strong>
                {this.state.allData.userData.company.name}
              </p>
              <p>
                <strong>Website: </strong>
                {this.state.allData.userData.website}
              </p>
              <p>
                <strong>Address: </strong>
                {this.state.allData.userData.address.street},{" "}
                {this.state.allData.userData.address.suite},
                {this.state.allData.userData.address.city},{" "}
                {this.state.allData.userData.address.zipcode}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
