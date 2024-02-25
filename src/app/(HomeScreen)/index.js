import React, { useState, useContext } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView, Image, Pressable } from 'react-native'
import { Link, router } from 'expo-router'

// this file is a placeholder for the first page of the homepage

const index = () => {
	return (
		<SafeAreaView>
			<View style={{ marginTop: 100 }}>
				<Pressable onPress={() => router.push('discover')}>
					<Text>Go to Discover page</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	)
}

export default index
