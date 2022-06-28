import React, { Component } from "react";
import AddNumber from "../components/AddNumber";

class AddNumberRoot extends Component {
  render() {
    return (
      <div>
        <h1>Add Number</h1>
        <AddNumber></AddNumber>
      </div>
    );
  }
}

export default AddNumberRoot;