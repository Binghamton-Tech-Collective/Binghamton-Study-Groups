import React, { useState, useContext, useEffect } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView, Image, Pressable } from 'react-native'
import { users } from './(Tabs)/discover.js'
import styles from '../../styles/discoverPage.js'
import { Link, router } from 'expo-router'
import { getSuggestedUsers } from '../../services/suggestedUsers.js'

const forYou = () => {
	// const SAMPLE_USERS = useContext(users)
	const [suggestedUsers, setSuggestedUsers] = useState([])

	useEffect(() => {
		const fetchSuggestedUsers = async () => {
			try {
				const result = await getSuggestedUsers()
				setSuggestedUsers(result)
				// console.log(result)
			} catch (error) {
				console.error(error)
			}
		}
		fetchSuggestedUsers()
	}, [])

	return (
		<SafeAreaView>
			<View style={styles.banner}>
				<Text style={styles.bannerHeading}>For You</Text>
			</View>

			<Pressable onPress={() => router.push('discover')}>
				<Text>Go back to Discover page</Text>
			</Pressable>

			<View style={styles.usersContainer}>
				{suggestedUsers &&
					suggestedUsers.map((user) => (
						<View style={styles.userItem} key={user.id}>
							<View style={styles.userItemFlex}>
								<View style={{ flex: 1, flexDirection: 'col', alignItems: 'center' }}>
									{/* <Image style={styles.profileImage} source={{ uri: user.profileImageURL }} /> */}
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
