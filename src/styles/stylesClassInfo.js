import { StyleSheet } from 'react-native';

const stylesClassInfo = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 25,
        height: '100%',
    },
    label: {
        fontWeight: 'bold',
        color: '#0E984F',
        fontSize: 40,
        textAlign: 'center'
        },
    dropdown: {
        height: 50,
        borderColor: '#005A43',
        borderWidth: 5,
        borderRadius: 24,
        paddingHorizontal: 8,
        marginTop: 15,
        backgroundColor: 'White',
    },
    placeholderStyle: {
        fontSize: 16,
        textAlign: 'left',
        color: '#C9C9C9'
    },
    selectedTextStyle: {
        fontSize: 16,
        textAlign: 'left',
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    dropdownLabel: {
        textAlign: 'center',
        fontSize: 24,
        marginTop: 15,
        marginBottom: 15,
    },
    nextButton: {
        backgroundColor: "#FF8552",
        height: 60,
        width: '90%',
        paddingVertical: 10,
        marginBottom: 40,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24,        
    },
    nextButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default stylesClassInfo;