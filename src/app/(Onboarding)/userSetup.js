import { View, Text, Pressable, TextInput, StyleSheet, Image, SafeAreaView } from 'react-native'
import React, { useState, useContext, createContext } from 'react'
import ArrowButton from '../../components/functional/ArrowButton.js'
import { Link, router } from 'expo-router'
import styles from '../../styles/signInPage.js'

const userSetup = () => {
	const [password, setPassword] = useState('')
	const [fullName, setFullName] = useState('')

	return (
		<SafeAreaView>
			{/* <Text>email is {email}</Text> */}
			<View style={styles.logoContainer}>
				{/* placeholder logo below */}
				<Image style={styles.logo} source={{ uri: 'https://www.shenandoahpaint.com/cdn/shop/products/A3CDB5_1024x.png?v=1606782113' }} />
			</View>

			<View style={styles.center}>
				<Text style={styles.heading}>Set Up Your Profile!</Text>
				<TextInput style={styles.form} value={fullName} onChangeText={(fullName) => setFullName(fullName)} placeholder="Full Name" />
				<TextInput style={styles.form} value={password} onChangeText={(password) => setPassword(password)} placeholder="Password" />
				<Pressable
					// TODO: ONLY NAVIGATE TO USERINFO IF SIGNUP IS SUCCESSFUL
					style={styles.orangeButton}
					onPress={() => router.push('userInfo')}
				>
					<Text style={styles.orangeButtonText}>Next</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	)
}

export default userSetup
