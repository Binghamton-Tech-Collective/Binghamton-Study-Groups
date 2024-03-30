import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
	orContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 12,
	},
	horizontalLine: {
		flex: 1,
		height: 1,
		marginHorizontal: 36,
		backgroundColor: '#000',
	},

	center: {
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
	logoContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 24,
	},
	logo: {
		height: 100,
		width: 100,
		borderRadius: 12,
	},
	heading: {
		fontSize: 40,
		fontWeight: 'bold',
		color: '#0E984F',
	},
	form: {
		textAlign: 'left',
		backgroundColor: '#E6E6E6',
		width: 325,
		height: 40,
		marginVertical: 8,
		borderRadius: 24,
		paddingLeft: 16,
	},
	orangeButton: {
		backgroundColor: '#FF8552',
		width: 325,
		height: 45,
		marginVertical: 36,
		borderRadius: 24,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
	orangeButtonText: {
		color: 'white',
		fontSize: 18,
	},
	stepBarContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 8,
		marginHorizontal: 24,
		borderRadius: 12,
		backgroundColor: '#E6E6E6',
		height: 24,
		width: 325,
	},
	stepBar: {
		height: 24,
		width: '50%',
		marginVertical: 8,
		borderRadius: 12,
	},
	stepFlex: {
		flexDirection: 'row',
	},
	errorMessage: {
		color: "red",
		fontWeight: "bold"
	}
})

export default styles;