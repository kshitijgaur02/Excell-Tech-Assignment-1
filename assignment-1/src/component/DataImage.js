import React, { Component } from "react";
export default class DataImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageData: this.props.imageData,
    };
  }
  render() {
    return <img className="profile-img" src={this.state.imageData} alt="" />;
  }
}
