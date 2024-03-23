import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import FirebaseAuth from '@react-native-firebase/auth';

const SignUp = async (auth, email, password) => {
    const regex = /^[a-zA-Z0-9._%+-]+@binghamton.edu$/;
    if (!regex.test(email)) {
        return "Error: Email is invalid. Please use a Binghamton University email.";
    }

    try {
        const userCredential = await FirebaseAuth().createUserWithEmailAndPassword(
            
            email,
            password
        );
        return userCredential;
    } catch (error) {
        if (error.code === "auth/email-already-in-use") {
            return "Error: The email address is already in use by another account.";
        } else if (error.code === "auth/weak-password") {
            return "Error: The password is too weak.";
        } else {
            return `Error: ${error.message}`;
        }
    }
};

const SignIn = async (auth, email, password) => {
    try {
        const userCredential = await FirebaseAuth().signInWithEmailAndPassword(
            email,
            password
        );
        return userCredential;
    } catch (error) {
        console.error("Sign-in failed:", error);
        throw error;
    }
};














export { SignUp, SignIn };
