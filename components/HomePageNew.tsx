import { StyleSheet } from "react-native";
import { MyFunctionalComponent, MyClassComponent } from "./LearnFunctionalComponent";
import { LearnMoreHooks } from "./LearnMoreHooks";

export function HomePageNew({ version }) {
	// if (version == 1) {
	// 	return <div style={styles.titleHome}>Home page new...</div>		
	// } else {
	// 	return <div style={styles.titleHome}>Home page new 2...</div>				
	// }
	return (
		<>
			<div 
				style={styles.titleHome}
			>
				Home page new {version}
				<MyFunctionalComponent 
					nama="Bambang"
					fav_genre={
						["pop", "rock"]
					}	
					detail={
						{
							'age': 17,
							'address': 'Jakarta'
						}
					}
				/>
				<MyClassComponent 
					fav_genre={
						["pop", "rock"]
					}			
				/>
				<LearnMoreHooks />
			</div>
		</>
	)
}

const styles = StyleSheet.create({
	titleHome: {
		fontSize: 60,
		color: 'white',
		fontWeight: 'bold',
	}
})