import FirebaseAuth, { FirebaseAuthTypes, firebase } from '@react-native-firebase/auth';
import Firestore from '@react-native-firebase/firestore';
import moment from  'moment';


const createNewUser = async (uniqueUserId, fullName, major, year, email) => {
    try {
            const date = moment()
            .utcOffset('-05:00')
            .format('YYYY-MM-DD hh:mm:ss a');
             console.log("Test")
            
             await Firestore().collection('Users').doc(uniqueUserId).set({
                
                timestampCreated: date,
                email: {email},
                fullName: {fullName},
                major: {major},
                year: {year},
                bio: "",
                friends: [],
                studyGroups: []
            });
            console.log("Added User")
        }
    catch (error) {
        console.error("Error writing to Firestore:", error);
    }
    console.log("End Function")
}

export default createNewUser;