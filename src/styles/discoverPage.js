import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	banner: {
		backgroundColor: '#26563C',
		height: 90,
	},
	bannerHeading: {
		color: '#0E984F',
		fontSize: 36,
		marginTop: 40,
		paddingLeft: 20,
		paddingBottom: 8,
	},
	heading: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		paddingTop: 20,
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 5,
	},
	usersContainer: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		padding: 20,
		gap: 5,
	},
	userItem: {
		height: 110,
		width: 110,
		backgroundColor: '#26563C',
		borderRadius: 10,
	},
	userItemFlex: {
		flex: 1,
		flexDirection: 'col',
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		gap: 4,
		padding: 6,
	},
	groupsContainer: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		padding: 20,
		gap: 5,
	},
	groupItem: {
		backgroundColor: '#26563C',
		width: '100%',
		height: 70,
		borderRadius: 10,
	},
	groupItemFlex: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'justify-between',
		padding: 20,
		// justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
	},
	profileImage: {
		height: 40,
		width: 40,
		borderRadius: 20,
	},
	button: {
		backgroundColor: '#FF8552',
		width: 80,
		height: 20,
		borderRadius: 24,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default styles
