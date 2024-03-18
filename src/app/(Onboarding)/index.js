import { View, Text, Pressable, TextInput, StyleSheet, Image, SafeAreaView } from 'react-native'
import React, { useState, useContext, createContext } from 'react'
import ArrowButton from '../../components/functional/ArrowButton.js'
import { Link, router } from 'expo-router'
import styles from '../../styles/signInPage.js'

const index = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [fullName, setFullName] = useState('')
	const [mode, setMode] = useState(1)

	// Mode 1 - Log in
	// Mode 2- Sign up (Email)
	// Mode 3 - Sign up part 2 (Phone number)
	// Mode 4 - Sign up part 3 (Full name + password)
	
	return (
		<SafeAreaView>
			<View>
				<View style={styles.logoContainer}>
					{/* placeholder logo below */}
					<Image style={styles.logo} source={{ uri: 'https://www.shenandoahpaint.com/cdn/shop/products/A3CDB5_1024x.png?v=1606782113' }} />
				</View>

				<View style={styles.center}>
					<Text style={styles.heading}>Log In</Text>

					<View style={{ marginTop: 36 }}>
						<TextInput style={styles.form} value={email} onChangeText={(email) => setEmail(email)} placeholder="Email" />
						<TextInput style={styles.form} value={password} onChangeText={(password) => setPassword(password)} placeholder="Password" />
					</View>

					<View style={styles.center}>
						{/* <Text style={{ marginTop: 36, marginBottom: 12 }}>or</Text> */}
						<View style={styles.orContainer}>
							<View style={styles.horizontalLine} />
							<Text>or</Text>
							<View style={styles.horizontalLine} />
						</View>

						<Pressable onPress={() => router.push('signup')}>
							<Text>Sign Up</Text>
						</Pressable>

						<Pressable
							// TODO: ONLY NAVIGATE TO HOMESCREEN IF LOGIN IS SUCCESSFUL
							onPress={() => router.push('/(HomeScreen)')}
							style={styles.orangeButton}
						>
							<Text style={styles.orangeButtonText}>Log In</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</SafeAreaView>
	)
}
export default index
