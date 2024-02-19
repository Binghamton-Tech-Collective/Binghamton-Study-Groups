import { StyleSheet } from 'react-native';

const stylesUserInfo = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 25,
      height: '100%',
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0,
      borderRadius: 24,
      paddingHorizontal: 8,
      backgroundColor: '#E6E6E6',
    },
    placeholderStyle: {
      fontSize: 16,
      textAlign: 'center',
    },
    selectedTextStyle: {
      fontSize: 16,
      textAlign: 'center',
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    dropdownLabel: {
        textAlign: 'center',
        fontSize: 24,
        marginTop: 80,
        marginBottom: 15,
    },
    skipButton: {
        backgroundColor: "#FF8552",
        height: 60,
        width: '90%',
        paddingVertical: 10,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24,        
    },
    skipButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
  });

  export default stylesUserInfo;