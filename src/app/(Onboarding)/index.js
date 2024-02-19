import { View, Text, Pressable, TextInput, StyleSheet, Image } from 'react-native'
import ArrowButton from '../../components/functional/ArrowButton.js'
import { Link, router } from 'expo-router'
import { useState } from 'react'
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
		<View>
			{/* <Pressable onPress={() => router.replace('signup')}>
				<Text>Go to signup</Text>
			</Pressable> */}

			{(mode === 1 || mode === 2 || mode === 3 || mode === 4) && (
				<View style={styles.logoContainer}>
					{/* placeholder logo below */}
					<Image style={styles.logo} source={{ uri: 'https://www.shenandoahpaint.com/cdn/shop/products/A3CDB5_1024x.png?v=1606782113' }} />
				</View>
			)}

			{mode === 1 && (
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

						<Pressable
							onPress={() => {
								setMode(2)
								setPassword('')
							}}
						>
							<Text>Sign Up</Text>
						</Pressable>

						<Pressable style={styles.orangeButton}>
							<Text style={styles.orangeButtonText}>Log In</Text>
						</Pressable>
					</View>
				</View>
			)}

			{(mode === 2 || mode === 3) && (
				<View style={styles.center}>
					<Text style={styles.heading}>Sign Up</Text>

					<View style={styles.center}>
						<View style={styles.stepFlex}>
							<Text style={{ paddingHorizontal: 24 }}>Email Address</Text>
							<Text style={{ paddingHorizontal: 24 }}>Phone Address</Text>
						</View>

						<View style={styles.stepBarContainer}>
							{mode === 2 ? (
								<>
									<View style={[styles.stepBar, { backgroundColor: '#26563C' }]} />
									<View style={styles.stepBar} />
								</>
							) : (
								<>
									<View style={[styles.stepBar, mode === 3 && { backgroundColor: '#26563C', marginLeft: '50%' }]} />
									<View style={styles.stepBar} />
								</>
							)}
						</View>
					</View>

					{mode === 2 ? (
						<TextInput style={styles.form} value={email} onChangeText={(email) => setEmail(email)} placeholder="Email" />
					) : (
						<TextInput style={styles.form} value={phoneNumber} onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)} placeholder="Phone Number" keyboardType={'phone-pad'} />
					)}

					<View style={styles.orContainer}>
						<View style={styles.horizontalLine} />
						<Text>or</Text>
						<View style={styles.horizontalLine} />
					</View>

					<Pressable onPress={() => setMode(1)}>
						<Text>Login</Text>
					</Pressable>

					<Pressable style={styles.orangeButton} onPress={() => (mode === 2 ? setMode(3) : setMode(4))}>
						<Text style={styles.orangeButtonText}>Next</Text>
					</Pressable>
				</View>
			)}

			{mode === 4 && (
				<View style={styles.center}>
					<Text style={styles.heading}>Set Up Your Profile!</Text>
					<TextInput style={styles.form} value={fullName} onChangeText={(fullName) => setFullName(fullName)} placeholder="Full Name" />
					<TextInput style={styles.form} value={password} onChangeText={(password) => setPassword(password)} placeholder="Password" />
					<Pressable style={styles.orangeButton} onPress={() => router.push("userInfo")}>
						<Text style={styles.orangeButtonText}>Next</Text>
					</Pressable>
				</View>
			)}
		</View>
	)
}
export default index

