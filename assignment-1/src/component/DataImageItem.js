import React, { Component } from "react";
import DataBody from "./DataBody";
import DataImage from "./DataImage";

export default class DataImageItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardDataImage: this.props.cardDataImage,
    };
  }

  render() {
    return (
      <div className="img-square-wrapper p-2">
        {this.state.cardDataImage.map((image) => {
          return <DataImage imageData={image} />;
        })}
      </div>
    );
  }
}
