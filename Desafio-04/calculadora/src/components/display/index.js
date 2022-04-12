import React, { Component } from "react";
import '../../App.css'

class Display extends Component {
  render() {
    return (
        <input type="text" className="field" value={this.props.value}/>
    );
  }
}

export default Display;
