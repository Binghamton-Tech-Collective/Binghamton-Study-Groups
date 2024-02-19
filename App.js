import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, useState, TextInput, SafeAreaView } from 'react-native';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import React from 'react';


async function fetchJSONAsync() {
  const userDocument = await firestore().collection('Value').doc('TestDocument').get();
  console.log(userDocument.data());

}


 

const  App = () => {
  const [username, onChangeText] = React.useState('');
  
  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <SafeAreaView>
      <TextInput
      style = {styles.input}
      onChangeText = {onChangeText}
      value = 'hello'
      />
      </SafeAreaView>
    </View>
   
  );



}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });