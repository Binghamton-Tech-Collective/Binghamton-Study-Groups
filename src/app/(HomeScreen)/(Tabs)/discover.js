import React, { useState, createContext, useEffect } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView, Image, Pressable } from 'react-native'
import styles from '../../../styles/discoverPage'
import { Link, router } from 'expo-router'
import { getSuggestedUsers, getSuggestedGroups } from '../../../services/suggestedFunctions.js'
import discoverInfo from "../../../services/discoverInfo.js"

/*
	Discover Page: Where users can discover new study groups friend recommendations from related users
*/

const index = () => {
	const [suggestedUsers, setSuggestedUsers] = useState([])

	useEffect(() => {
		const fetchSuggestedUsers = async () => {
			try {
				const result = await getSuggestedUsers()
				setSuggestedUsers(result)
			} catch (error) {
				console.error(error)
			}
		}

		const fetchSuggestedGroups = async () => {
			try {
				const result = await getSuggestedGroups()
				discoverInfo.suggestedGroups = result;
			} catch (error) {
				console.error(error)
			}
		}

		fetchSuggestedUsers()
		fetchSuggestedGroups()
	}, [])

	return (
		<SafeAreaView>
			<View style={styles.banner}>
				<Text style={styles.bannerHeading}>Discover</Text>
			</View>

			<View style={styles.heading}>
				<Text style={{ fontSize: 16 }}>For You:</Text>
				<Pressable onPress={() => router.push('../forYou')}>
					<Text style={{ color: '#808080' }}>see all</Text>
				</Pressable>
			</View>

			<View style={styles.usersContainer}>
				{suggestedUsers &&
					suggestedUsers.slice(0, 9).map((user) => (
						<View style={styles.userItem}>
							<View style={styles.userItemFlex}>
								<View style={{ flex: 1, flexDirection: 'col', alignItems: 'center' }}>
									{/* // TODO: conditional rendering for pfp. default is shadow. */}
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

			<View style={{ marginTop: 310 }}>
				<View style={styles.heading}>
					<Text style={{ fontSize: 16 }}>Groups:</Text>
					<Pressable onPress={() => router.push('../groupForYou')}>
						<Text style={{ color: '#808080' }}>see all</Text>
					</Pressable>
				</View>
			</View>

			<View style={styles.groupsContainer}>
				{discoverInfo.suggestedGroups.slice(0, 3).map((group) => (
					<View style={styles.groupItem}>
						<View style={styles.groupItemFlex}>
							<View style={{ flexDirection: 'row', flex: 1, gap: 6 }}>
								<Image style={styles.profileImage} source={{ uri: group.ImageURL }} />
								<View style={{ flexDirection: 'col', flex: 1 }}>
									<Text style={{ color: 'white', fontSize: 16 }}>{group.Name}</Text>
									<Text style={{ color: '#92AA9D', fontSize: 12 }}>{group.Members.length} buddies</Text>
								</View>
							</View>
							<TouchableOpacity style={styles.button}>
								<Text>Join</Text>
							</TouchableOpacity>
						</View>
					</View>
				))}
			</View>
		</SafeAreaView>
	)
}

export default index
