import { Text, StyleSheet } from "react-native"

const ErrorMessage = (props) => {
    return (<Text style={styles.errorMessage}>{props.message}</Text>)
}

const styles = StyleSheet.create({
    errorMessage: {
        color: "red",
        fontWeight: "bold"
    }
});

export default ErrorMessage