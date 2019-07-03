import React, { Component } from "react";
import { ScrollView } from "react-native";
import { Text } from "native-base";
class ScrollableListExample extends Component {
	names = [
		{ name: "ali" },
		{ name: "bugti" },
		{ name: "Shakeel" },
		{ name: "fahad" },
		{ name: "parbhu" },
		{ name: "darshan" },
		{ name: "owais" },
		{ name: "sanju" },
		{ name: "ali" },
		{ name: "ali" },
		{ name: "ali" },
		{ name: "ali" },
		{ name: "bugti" },
		{ name: "Shakeel" },
		{ name: "fahad" },
		{ name: "parbhu" },
		{ name: "darshan" },
		{ name: "owais" },
		{ name: "sanju" },
		{ name: "ali" },
		{ name: "ali" },
		{ name: "ali" }
	];
	render() {
		return (
			<ScrollView style={{ backgroundColor: "white" }}>
				{this.names.map(person => (
					<Text>{person.name}</Text>
				))}
			</ScrollView>
		);
	}
}

export default ScrollableListExample;
