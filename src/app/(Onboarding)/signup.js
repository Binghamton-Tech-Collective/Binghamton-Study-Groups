import { View, Text, Pressable, TextInput, StyleSheet, Image, SafeAreaView } from 'react-native'
import React, { useState, useContext, createContext } from 'react'
import ArrowButton from '../../components/functional/ArrowButton.js'
import ErrorMessage from '../../components/functional/ErrorMessage.js'
import { Link, router } from 'expo-router'
import styles from '../../styles/signInPage.js'
import newUser from '../../services/newUser'
import { validateEmail, validatePhoneNumber } from "../../services/loginFunctions.js"

const signup = () => {
	const [email, setEmail] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [mode, setMode] = useState('email')
	const [errorMessage, setErrorMessage] = useState("")

	return (
		<SafeAreaView>
			<View style={styles.logoContainer}>
				{/* placeholder logo below */}
				<Image style={styles.logo} source={{ uri: 'https://www.shenandoahpaint.com/cdn/shop/products/A3CDB5_1024x.png?v=1606782113' }} />
			</View>

			{(mode === 'email' || mode === 'phone') && (
				<View style={styles.center}>
					<Text style={styles.heading}>Sign Up</Text>

					<View style={styles.center}>
						<View style={styles.stepFlex}>
							<Text style={{ paddingHorizontal: 24 }}>Email Address</Text>
							<Text style={{ paddingHorizontal: 24 }}>Phone Address</Text>
						</View>

						<View style={styles.stepBarContainer}>
							{mode === 'email' ? (
								<>
									<View style={[styles.stepBar, { backgroundColor: '#26563C' }]} />
									<View style={styles.stepBar} />
								</>
							) : (
								<>
									<View style={[styles.stepBar, mode === 'phone' && { backgroundColor: '#26563C', marginLeft: '50%' }]} />
									<View style={styles.stepBar} />
								</>
							)}
						</View>
					</View>

					{mode === 'email' ? (
						<TextInput
							style={styles.form}
							value={email}
							onChangeText={(email) => {
								setEmail(email)
								newUser.setEmail(email)
							}}
							placeholder="Email"
						/>
					) : (
						<TextInput
							style={styles.form}
							value={phoneNumber}
							onChangeText={(phoneNumber) => {
								setPhoneNumber(phoneNumber)
								newUser.setPhoneNumber(phoneNumber)
							}}
							placeholder="Phone Number"
							keyboardType={'phone-pad'}
						/>
					)}

					<View style={styles.orContainer}>
						<View style={styles.horizontalLine} />
						<Text>or</Text>
						<View style={styles.horizontalLine} />
					</View>

					<Pressable onPress={() => router.push('(Onboarding)/')}>
						<Text>Login</Text>
					</Pressable>

					<Pressable
						style={styles.orangeButton}
						onPress={() => {
							if (mode === 'email') {
								const validateEmailResult = validateEmail(email);
								if (validateEmailResult != true) {
									setErrorMessage(validateEmailResult)
								}
								else {
									setErrorMessage("")
									setMode('phone')
								}
							}
							else {
								const validatePhoneNumberResult = validatePhoneNumber(phoneNumber);
								if (validatePhoneNumberResult != true) {
									setErrorMessage(validatePhoneNumberResult)
								}
								else {
									setErrorMessage("")
									router.push('userSetup')
								}
							}
						}}
					>
						<Text style={styles.orangeButtonText}>Next</Text>
					</Pressable>
					{errorMessage !== '' && (
						<ErrorMessage message={errorMessage} />
					)}
				</View>
			)}
		</SafeAreaView>
	)
}

export default signup
