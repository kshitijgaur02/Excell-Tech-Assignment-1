import DataItem from "./DataItem";
import React, { Component } from "react";

export default class DataList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };

    console.log("constructor datalist");
  }

  componentDidMount = async () => {
    var response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    });
    var information = await response.json();
    console.log("did mount datalist", information);
    this.setState({ data: information });
  };

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ data: data }));
  // }
  render() {
    console.log("render datalist");
    return (
      <div className="container">
        {this.state.data.map((info) => {
          return <DataItem allData={info} />;
        })}
      </div>
    );
  }

  componentDidCatch(error, info) {
    //console.log("componentDidCatch ", error, info);
    localStorage.lastError = `${error}\n ${JSON.stringify(info)}`;
  }
}
