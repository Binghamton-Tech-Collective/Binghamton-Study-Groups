import FirebaseAuth, { FirebaseAuthTypes, firebase } from '@react-native-firebase/auth';
import Firestore from '@react-native-firebase/firestore';
import moment from  'moment';


const newUser = async (uniqueUserId) => {
    try {
            const date = moment()
            .utcOffset('+05:30')
            .format('YYYY-MM-DD hh:mm:ss a');
             console.log("Test")
            
             await Firestore().collection('Users').doc(uniqueUserId).set({
                
                timestampCreated: date,
                email: "",
                fullName: "",
                major: "",
                year: 1234,
                bio: "",
                friends: []
            });
            console.log("Added User")
        }
    catch (error) {
        console.error("Error writing to Firestore:", error);
    }
    console.log("End Function")
}

export default newUser;