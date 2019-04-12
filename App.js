import React from "react";
import ButtonExmple from "./components/ButtonExample";
import SliderExample from "./components/SliderExample";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import TouchableOpacityExample from "./components/TouchableOpacityExample";
import ScrollableListExample from "./components/ScrollableListExample";
import CameraExample from "./components/CameraExample";
export default class App extends React.Component {
  state = {
    num: 0
  };

  handleValueChange = value => {
    this.setState({
      num: value
    });
  };
  handleLongPress = () => {
    alert("long Press");
  };
  handlePress = () => {
    alert("only press");
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: "blue", flex: 2 }}>
          <CameraExample />
        </View>
        <View style={{ backgroundColor: "yellow", flex: 3 }}>
          <SliderExample />
        </View>
        <ButtonExmple />
        <TouchableOpacityExample />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey"
  }
});
