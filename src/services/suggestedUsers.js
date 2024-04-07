import Firestore from '@react-native-firebase/firestore'
import newUser from './newUser'

const getSuggestedUsers = async () => {
	let tempDoc = []

	// if (docData) {
	// 	this.bio = docData.bio.bio
	// 	this.email = docData.email.email
	// 	this.friends = docData.friends
	// 	this.fullName = docData.fullName.fullName
	// 	this.major = docData.major.major
	// 	this.socialMediaLinks = docData.socialMediaLinks
	// 	this.studyGroups = docData.studyGroups
	// 	this.year = docData.year.year
	// }

	try {
		const users = await Firestore().collection('Users').get()
		// const docData = docRef.data()

		tempDoc = users.docs.map((doc) => {
			// console.log(tempDoc)
			return { id: doc.id, ...doc.data() }
		})
	} catch (error) {
		console.error('Error getting all users', error)
		throw error
	}

	return tempDoc
}

export { getSuggestedUsers }
