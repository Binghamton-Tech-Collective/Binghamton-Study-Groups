import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = async (auth, email, password) => {
    const regex = /^[a-zA-Z0-9._%+-]+@binghamton.edu$/;
    if (!regex.test(email)) {
        return "Error: Email is invalid. Please use a Binghamton University email.";
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
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

export { SignUp };
