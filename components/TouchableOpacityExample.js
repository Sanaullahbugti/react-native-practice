import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default class TouchableOpacityExample extends Component {
    handleTouch =()=>{
        alert("touched")
    }
    handleLongPress = ()=>{
        alert("Long Press !!")
    }
  render() {
    return (
      <TouchableOpacity style={styles.button} onPress ={this.handleTouch} onLongPress={this.handleLongPress}>
        <Text>Touch me!!!!</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 60,
    alignItems: "center",
    backgroundColor: "white",
    height: 40,
    width: 200
  }
});
