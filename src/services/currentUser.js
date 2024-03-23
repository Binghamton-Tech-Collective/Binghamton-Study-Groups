
import Firestore from '@react-native-firebase/firestore';

class currentUser{
//static data
static uniqueUserId = null;

//dynamic user data
static bio = null;
static friends = null;
static major = null;
static year = null;
static email = null;
static fullName;
static studyGroups = null;


static unsubscribe = null;


static setUniqueUserId(uniqueUserId){
    this.uniqueUserId = uniqueUserId;
}
//initializes user data
static async initializeUser() {
    try{
        const docRef = await Firestore().collection('Users').doc(this.uniqueUserId).get();
        const docData = docRef.data()

        if(docData){
            this.bio = docData.bio.bio;
            this.email = docData.email.email;
            this.friends = docData.friends;
            this.fullName = docData.fullName.fullName;
            this.major = docData.major.major;
            this.socialMediaLinks = docData.socialMediaLinks;
            this.studyGroups = docData.studyGroups;
            this.year = docData.year.year;
            
        }

         
    } catch (error){
        console.error("Error Initalizing User:", error)
    }
    
}

//only changes data when data changes
static async setSnapshot() {
    try {
        //event listener to update data when it changes
        const docRef = Firestore().collection("Users").doc(this.uniqueUserId);
        //const docSnapshot = await docRef.get();
         this.unsubscribe = docRef.onSnapshot(
            docSnapshot => {
                const docData = docSnapshot.data();

                if(docData){
                    this.bio = docData.bio.bio;
                    this.email = docData.email.email;
                    this.friends = docData.friends.friends;
                    this.fullName = docData.fullName.fullName;
                    this.major = docData.major.major;
                    this.socialMediaLinks = docData.socialMediaLinks;
                    this.studyGroups = docData.studyGroups;
                    this.year = docData.year.year;
                 
                }
            },
            error => {
                console.error("Error fetching document:", error);
            }
        );
    } catch (error) {
        console.error("Error:", error);
    }
}

static logout(){
    //detatch listener and set all data to null
    this.unsubscribe();

    uniqueUserId = null;
    bio = null;
    friends = null;
    major = null;
    year = null;
    email = null;
    fullName = null
    studyGroups = null;
    unsubscribe = null;

}



}

export default currentUser;