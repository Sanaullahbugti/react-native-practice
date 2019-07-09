import * as React from 'react';
import { Button, Image, View } from 'react-native';
import { ImagePicker, Permissions, Constants } from 'expo';

export default class LoadingImage extends React.Component {
	state = {
		image: null,
	};

	render() {
		let { image } = this.state;

		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Button
					title="Load Image"
					onPress={this.loadImage}
				/>
				{image &&
					<Image source={{ uri: image }} style={{ width: "100%", height: "100%" }} />}
			</View>
		);
	}

	componentDidMount() {
		this.getPermissionAsync();
	}

	getPermissionAsync = async () => {
		if (Constants.platform.ios) {
			const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
			if (status !== 'granted') {
				alert('permission required');
			}
		}
	}

	loadImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
		});

		console.log(result);

		if (!result.cancelled) {
			this.setState({ image: result.uri });
		}
	};
}