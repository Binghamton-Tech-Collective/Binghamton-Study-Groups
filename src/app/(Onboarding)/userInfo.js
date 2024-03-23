import React, { useState, useContext, createContext } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import { Link, router } from 'expo-router'
import stylesUserInfo from '../../styles/stylesUserInfo'
import createNewUser from '../../server/newUser.js'
import {SignUp} from '../../services/loginFunctions.js'
import FirebaseAuth from '@react-native-firebase/auth'
import newUser from '../../services/newUser'
import currentUser from '../../services/currentUser.js'

// Major list with placeholders
const MAJORS = [
	{ label: 'Biology', value: '1' },
	{ label: 'Computer Science', value: '2' },
	{ label: 'Electrical Engineering', value: '3' },
	{ label: 'Accouting', value: '4' },
	{ label: 'Finance', value: '5' },
	{ label: 'Eduaction', value: '6' },
	{ label: 'Physics', value: '7' },
	{ label: 'Political Science', value: '8' },
]

// Not sure how we wanted this handled, years or numerical?
const YEARS = [
	{ label: 'Freshmen', value: '1' },
	{ label: 'Sophmore', value: '2' },
	{ label: 'Junior', value: '3' },
	{ label: 'Senior', value: '4' },
	{ label: 'Graduate', value: '5' },
]

const userInfo = () => {
	// State for major dropdown
	const [majorValue, setMajorValue] = useState(null)
	// State for year dropdown
	const [yearValue, setYearValue] = useState(null)

	const [isMajorFocus, setIsMajorFocus] = useState(false)
	const [isYearFocus, setIsYearFocus] = useState(false)

	// Blank handle for the skip button
	const handleSkip = () => {
		console.log('Skip button pressed')
	}

	const printUser = () => {
		console.log('User Information:')
		console.log('Username:', newUser.userName)
		console.log('Phone Number:', newUser.phoneNumber)
		console.log('Email:', newUser.email)
		console.log('Major:', newUser.major)
		console.log('Year:', newUser.year)
		console.log('Password:', newUser.password)
		console.log('Full Name:', newUser.fullName)
	}

	return (
		<SafeAreaView>
			<View style={stylesUserInfo.container}>
				<View style={{ flex: 1 }}>
					<Text style={stylesUserInfo.dropdownLabel}>What's Your Major?</Text>
					<Dropdown
						style={[stylesUserInfo.dropdown]}
						placeholderStyle={stylesUserInfo.placeholderStyle}
						selectedTextStyle={stylesUserInfo.selectedTextStyle}
						inputSearchStyle={stylesUserInfo.inputSearchStyle}
						data={MAJORS}
						search
						maxHeight={300}
						labelField="label"
						valueField="value"
						placeholder={!isMajorFocus ? 'Select Your Major' : '...'}
						searchPlaceholder="Search..."
						value={majorValue}
						onFocus={() => setIsMajorFocus(true)}
						onBlur={() => setIsMajorFocus(false)}
						onChange={(item) => {
							setMajorValue(item.value)
							setIsMajorFocus(false)
							newUser.setMajor(item.value)
						}}
					/>
					<Text style={{ ...stylesUserInfo.dropdownLabel, marginTop: 200 }}>Graduation Year</Text>
					<Dropdown
						style={[stylesUserInfo.dropdown]}
						placeholderStyle={stylesUserInfo.placeholderStyle}
						selectedTextStyle={stylesUserInfo.selectedTextStyle}
						inputSearchStyle={stylesUserInfo.inputSearchStyle}
						data={YEARS}
						maxHeight={300}
						labelField="label"
						valueField="value"
						placeholder={!isYearFocus ? 'Select Your Year' : '...'}
						searchPlaceholder="Search..."
						value={yearValue}
						onFocus={() => setIsYearFocus(true)}
						onBlur={() => setIsYearFocus(false)}
						onChange={(item) => {
							setYearValue(item.value)
							setIsYearFocus(false)
							newUser.setYear(item.value)
						}}
					/>
				</View>
				<View style={{ alignItems: 'center' }}>
					<TouchableOpacity
						// onPress={handleSkip}
						onPress={() => {
            SignUp(FirebaseAuth(), newUser.email, newUser.password).then(
              () => {
              const auth = FirebaseAuth().currentUser;
								if (auth === null) {
									alert("User SignUp failed");
								}else{
                  newUser.uniqueUserId = auth.uid;
                 
				  createNewUser(newUser.uniqueUserId, newUser.fullName, newUser.major, newUser.year, newUser.email).then( () => {
				  
				  currentUser.setUniqueUserId(auth.uid);						
				  currentUser.initializeUser().then( ()=> {
                  router.push('../(HomeScreen)/homescreen');
				  })
				  })
                }
            })
              .catch(err =>{
                console.error("Sign up Error", err)
              })
             
            }}
            
            
            
            
           
						// onPress={printUser}
						style={stylesUserInfo.skipButton}
					>
						<Text style={stylesUserInfo.skipButtonText}>Skip</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default userInfo
