import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView, Image, Pressable } from 'react-native'
import { users } from './(Tabs)/discover.js'
import styles from '../../styles/discoverPage.js'
import { Link, router } from 'expo-router'
import { getSuggestedUsers } from '../../services/suggestedFunctions.js'

const forYou = () => {
	// TODO: CONDITIONAL RENDERING FOR USER PROFILE PICTURE. USES DEFAULT PFP AS OF RIGHT NOW.
	// TODO: FILTERS FRONTEND IMPLEMENTED, BUT NO LOGIC YET.

	const [suggestedUsers, setSuggestedUsers] = useState([]) // FULL LIST OF USERS, UNMODIFIED
	const [filteredUsers, setFilteredUsers] = useState([])
	const [currentFilter, setCurrentFilter] = useState('')

	useEffect(() => {
		const fetchSuggestedUsers = async () => {
			try {
				const result = await getSuggestedUsers()
				setSuggestedUsers(result)
				setFilteredUsers(result)
				// console.log(result)
			} catch (error) {
				console.error(error)
			}
		}
		fetchSuggestedUsers()
	}, [])

	const filter = (filter) => {
		if (currentFilter === filter) {
			// equivalent of double tapping a filter
			setCurrentFilter('')
			setFilteredUsers(suggestedUsers)
		} else {
			setCurrentFilter(filter)
			// TODO: FILTERS NOT IMPLEMENTED.
			if (filter === 'major') {
				// setFilteredUsers(suggestedUsers.filter())
			} else if (filter === 'year') {
				// setFilteredUsers(suggestedUsers.filter())
			} else if (filter === 'class') {
				//
			}
		}
	}

	return (
		<SafeAreaView>
			<View style={styles.banner}>
				<Text style={styles.bannerHeading}>For You</Text>
			</View>

			<Pressable onPress={() => router.push('discover')}>
				<Text>Go back to Discover page</Text>
			</Pressable>

			<View style={styles.filters}>
				<Pressable onPress={() => filter('major')} style={[styles.filterButton, currentFilter === 'major' && { borderWidth: 3, borderColor: 'limegreen' }]}>
					<Text>Major</Text>
				</Pressable>
				<Pressable onPress={() => filter('year')} style={[styles.filterButton, currentFilter === 'major' && { borderWidth: 3, borderColor: 'limegreen' }]}>
					<Text>Year</Text>
				</Pressable>
				<Pressable onPress={() => filter('class')} style={[styles.filterButton, currentFilter === 'major' && { borderWidth: 3, borderColor: 'limegreen' }]}>
					<Text>Class</Text>
				</Pressable>
			</View>

			<View style={styles.usersContainer}>
				{filteredUsers &&
					filteredUsers.map((user) => (
						<View style={styles.userItem} key={user.id}>
							<View style={styles.userItemFlex}>
								<View style={{ flex: 1, flexDirection: 'col', alignItems: 'center' }}>
									<Image style={styles.profileImage} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png' }} />
									<Text numberOfLines={1} style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>
										{user.fullName.fullName}
									</Text>
									<Text style={{ color: '#92AA9D', fontSize: 12, textAlign: 'center' }}>{user.email.email}</Text>
								</View>
								<TouchableOpacity style={styles.button}>
									<Text>Add</Text>
								</TouchableOpacity>
							</View>
						</View>
					))}
			</View>
		</SafeAreaView>
	)
}

export default forYou
