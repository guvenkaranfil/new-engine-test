import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'

export default function AuthLogo() {
	return (
		<View style={styles.logoContainer}>
			<Image source={require('../assets/logo.png')} style={styles.logo} />
		</View>
	)
}

const styles = StyleSheet.create({
	logoContainer: {
		marginTop: 30,
		marginBottom: 60,
		justifyContent: 'center',
		width: '100%',
		alignItems: 'center',
	},

	logo: {
		width: 32,
		height: 32,
	},
})


class B extends React.Component {
	render() {
		return (
			<View>
				<Text>Hello</Text>
			</View>
		)
	}
}