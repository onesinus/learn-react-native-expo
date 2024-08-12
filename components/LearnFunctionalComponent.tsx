import { Component } from 'react';
import { Text, View } from 'react-native';
export const MyFunctionalComponent = ({
	nama,
	fav_genre,
	detail
}) => {
	console.log(fav_genre)
	return 	(
		<View>
			<Text>Hello, Functional Component! {nama}</Text>
			<Text>Hello, hello {fav_genre[1]}</Text>
		</View>
	)
};

export class MyClassComponent extends Component {
	render() {
		console.log();
		return (
			<View>
				<Text>Hello, Class Component! {this.props.fav_genre[0]}</Text>
				<Text>Hello, Class Component! {this.props.fav_genre[1]}</Text>
			</View>
		);
	}
}
