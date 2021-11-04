import React, { Component } from "react";
import DataImage from "./DataImage";

export default class DataImageItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardDataImage: this.props.cardDataImage, //Contains image url
    };
  }

  render() {
    return (
      <div className="img-square-wrapper p-2">
        <DataImage imageData={this.state.cardDataImage} />;
      </div>
    );
  }
}
