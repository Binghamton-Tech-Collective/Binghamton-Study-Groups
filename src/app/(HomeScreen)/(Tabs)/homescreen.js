import React, { useState, useContext, useEffect } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView, Image, Pressable, } from 'react-native'
import { Link, router } from 'expo-router'
import currentUser from '../../../services/currentUser'

// this file is a placeholder for the first page of the homepage


const index = () => {
	useEffect( () =>{
		currentUser.setSnapshot();
	});
	

	return (
		<SafeAreaView>
			<View style={{ marginTop: 100 }}>
				<Pressable onPress={() => router.push('discover')}>
					<Text>Go to Discover page</Text>
					<Text>Hello {currentUser.fullName}! </Text>

				</Pressable>
			</View>
		</SafeAreaView>
	)
}

export default index