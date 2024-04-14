import React, { useState, useContext, createContext, useEffect } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView, Image, Pressable } from 'react-native'
import styles from '../../../styles/discoverPage'
import { Link, router } from 'expo-router'
import { getSuggestedUsers, getSuggestedGroups } from '../../../services/suggestedFunctions.js'

/*
	Discover Page: Where users can discover new study groups friend recommendations from related users
*/

// TODO: REPLACE SAMPLE_GROUPS WITH SUGGESTEDGROUPS ONCE SUGGESTEDGROUPS COLLECTION IS DONE.

const SAMPLE_GROUPS = [
	{
		groupName: 'Calculus',
		groupProfileImageURL: 'https://www.shenandoahpaint.com/cdn/shop/products/A3CDB5_1024x.png?v=1606782113',
		numberOfMembers: 7,
	},
	{
		groupName: 'Orgo',
		groupProfileImageURL: 'https://www.shenandoahpaint.com/cdn/shop/products/A3CDB5_1024x.png?v=1606782113',
		numberOfMembers: 4,
	},
	{
		groupName: 'Computer Science',
		groupProfileImageURL: 'https://www.shenandoahpaint.com/cdn/shop/products/A3CDB5_1024x.png?v=1606782113',
		numberOfMembers: 5,
	},
	{
		groupName: 'Physics',
		groupProfileImageURL: 'https://www.shenandoahpaint.com/cdn/shop/products/A3CDB5_1024x.png?v=1606782113',
		numberOfMembers: 2,
	},
	{
		groupName: 'Business',
		groupProfileImageURL: 'https://www.shenandoahpaint.com/cdn/shop/products/A3CDB5_1024x.png?v=1606782113',
		numberOfMembers: 6,
	},
]

export const groups = createContext(SAMPLE_GROUPS)

const index = () => {
	const [suggestedUsers, setSuggestedUsers] = useState([])
	const [suggestedGroups, setSuggestedGroups] = useState([])

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

		const fetchSuggestedGroups = async () => {
			try {
				const result = await getSuggestedGroups()
				setSuggestedGroups(result)
				// console.log(result)
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
				{SAMPLE_GROUPS.slice(0, 3).map((group) => (
					<View style={styles.groupItem}>
						<View style={styles.groupItemFlex}>
							<View style={{ flexDirection: 'row', flex: 1, gap: 6 }}>
								<Image style={styles.profileImage} source={{ uri: group.groupProfileImageURL }} />
								<View style={{ flexDirection: 'col', flex: 1 }}>
									<Text style={{ color: 'white', fontSize: 16 }}>{group.groupName}</Text>
									<Text style={{ color: '#92AA9D', fontSize: 12 }}>{group.numberOfMembers} buddies</Text>
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
