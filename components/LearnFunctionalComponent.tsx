import { Component, useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
export const MyFunctionalComponent = ({
	nama='',
	fav_genre=[],
	detail={}
}) => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("");
	const [users, setUsers] = useState([]);

	useEffect(() => {
		console.log("page is rendered...")
		fetch('https://jsonplaceholder.typicode.com/users')
	      .then(response => response.json())
	      .then(users => setUsers(users))
	}, [])

	useEffect(() => {
		console.log(users)
	}, [users])

	useEffect(() => {
		console.log(">>>>>>>>>>>>> ")
		console.log(count)
		if (count > 10) {
			alert("Count is more than 10");
		}
	}, [count])

	return 	(
		<View>
			<Text>Hello, Functional Component! {nama}</Text>
			<Text>Hello, hello {fav_genre[1]}</Text>
			<Text>Ini adalah nomer: {count}</Text>
			<Text>ini adalah name: {name}</Text>
			<Button 
				onPress={() => setCount(count + 1)}
				title="Tambah Angka"
			/>
			<Button 
				title="Ubah Nama"
				onPress={() => setName("Bambang")}
			/>
			<ul>
				{
					users.map(function(user) {
						return (
							<li key={user.id}>{user.id} - {user.name} - {user.username}</li>
						)
					})

				}
			</ul>
		</View>
	)
};

export class MyClassComponent extends Component {
  // This method is called once, immediately after the component is added to the DOM
  componentDidMount() {
    console.log('Component did mount');
    // Example: Perform initial data fetching or setup here
  }

  // This method is called immediately after updating occurs
  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update');
    // Example: React to prop or state changes
    // Check if fav_genre has changed
    if (prevProps.fav_genre !== this.props.fav_genre) {
      console.log('Favorite genre updated');
    }
  }

  // This method is called immediately before the component is removed from the DOM
  componentWillUnmount() {
    console.log('Component will unmount');
    // Example: Clean up any resources (e.g., clear timers or cancel network requests)
  }

  render() {
    console.log('Rendering component');
    return (
      <View>
        <Text>Hello, Class Component! {this.props.fav_genre[0]}</Text>
        <Text>Hello, Class Component! {this.props.fav_genre[1]}</Text>
      </View>
    );
  }
}