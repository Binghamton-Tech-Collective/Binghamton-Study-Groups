import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import FirebaseAuth from '@react-native-firebase/auth';

const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@binghamton.edu$/;
    if (!regex.test(email)) {
        return "Error: Email is invalid. Please use a Binghamton University email.";
    }
    return true;
}

const validatePassword = (password) => {
    //If we need to increase security for passwords
    // const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    // if (!regex.test(password)) {
    //     return "Error: Password is too weak. It must contain at least 8 characters, an upper and lowercase character, a digit, and at least one special character (@$!%*?&).";
    // }

    const regex = /{1,}/
    if (!regex.test(password)) {
        return "Error: Password must not be empty";
    }
    return true;
}

const validatePhoneNumber = (phoneNumber) => {
    const regex = /[0-9]+/
    if (!regex.test(phoneNumber)) {
        return "Error: Phone Number must only contain digits in a sequence."
    }
    return true;
}

const validateFullName = (name) => {
    const regex = /[a-zA-Z ]+/
    if (!regex.test(name)) {
        return "Error: Name must only contain alphabetic characters."
    }
    return true;
}

const SignUp = async (auth, email, password) => {
    const validateEmailResult = validateEmail(email);
    const validatePasswordResult = validatePassword(password);
    if (validateEmailResult != true) {
        return validateEmailResult;
    }
    else if (validatePasswordResult != true) {
        return validatePasswordResult;
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
        throw error;
    }
};

export { SignUp, SignIn, validateEmail, validatePassword, validatePhoneNumber, validateFullName };
