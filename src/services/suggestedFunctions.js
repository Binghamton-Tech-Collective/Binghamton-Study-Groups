import Firestore from '@react-native-firebase/firestore'
import currentUser from './currentUser'

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

	// remove yourself from suggested users
	tempDoc = tempDoc.filter((item) => item.id !== currentUser.uniqueUserId)
	return tempDoc
}

const getSuggestedGroups = async () => {
	let tempDoc = []

	try {
		const groups = await Firestore().collection('StudyGroups').get()
		// const docData = docRef.data()

		tempDoc = groups.docs.map((doc) => {
			// console.log(tempDoc)
			return { id: doc.id, ...doc.data() }
		})
	} catch (error) {
		console.error('Error getting all groups', error)
		throw error
	}

	tempDoc = tempDoc.filter((item) => !currentUser.studyGroups.includes(item.id))
	return tempDoc
}

export { getSuggestedUsers, getSuggestedGroups }
