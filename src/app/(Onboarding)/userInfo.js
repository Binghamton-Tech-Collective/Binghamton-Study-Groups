import React, { useState, useContext, createContext } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import { Link, router } from 'expo-router'
import stylesUserInfo from '../../styles/stylesUserInfo'

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
						}}
					/>
				</View>
				<View style={{ alignItems: 'center' }}>
					<TouchableOpacity
						// onPress={handleSkip}
						onPress={() => router.push('/(HomeScreen)')}
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
