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
    var response = await fetch("https://jsonplaceholder.typicode.com/users");
    var information = await response.json();
    console.log("did mount ", information);
    this.setState({ data: information });
  };

  render() {
    console.log("render datalist");
    return (
      <ul>
        {this.state.data.map((info) => {
          return (
            <li key={info.id}>
              <DataItem allData={info} />
            </li>
          );
        })}
      </ul>
    );
  }

  componentWillUnmount() {
    //console.log("componentWillUnmount - shopping cart");
  }

  componentDidCatch(error, info) {
    //console.log("componentDidCatch - shopping cart", error, info);
    localStorage.lastError = `${error}\n ${JSON.stringify(info)}`;
  }
}
