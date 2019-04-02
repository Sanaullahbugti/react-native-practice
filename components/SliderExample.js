import React, { Component } from "react";
import { Slider } from "react-native";
import { View, Text } from "native-base";

export default class SliderExample extends Component {
  state = {
    num: 0
  };
  handleChange = value => {
    this.setState(preState => ({
      num: value
    }));
  };
  render() {
    return (
      <View>
        <Text>here is slider value : {this.state.num}</Text>
        <Slider
          value={this.state.num}
          minimumValue={0}
          maximumValue={100}
          step={10}
          onValueChange={value => this.handleChange(value)}
        />
      </View>
    );
  }
}
