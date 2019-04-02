import React, { Component } from "react";
import { Button  } from "react-native";
export default class ButtonExmple extends Component {
    handlePress =() =>{
        alert("button clicked!!!")
    }
  render() {
    return <Button title="Click me!!" onPress ={this.handlePress} />;
  }
}
