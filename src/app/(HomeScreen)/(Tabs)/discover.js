import React, { useState, useContext, createContext, useEffect } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView, Image, Pressable } from 'react-native'
import styles from '../../../styles/discoverPage'
import { Link, router } from 'expo-router'
import { getSuggestedUsers } from '../../../services/suggestedUsers.js'

/*
	Discover Page: Where users can discover new study groups friend recommendations from related users
*/

const SAMPLE_USERS = [
	{ fullName: 'Ashley Flower', pronouns: 'He/Him', profileImageURL: 'https://www.shenandoahpaint.com/cdn/shop/products/A3CDB5_1024x.png?v=1606782113' },
	{ fullName: 'Thomas Higton', pronouns: 'He/Him', profileImageURL: 'https://www.shenandoahpaint.com/cdn/shop/products/A3CDB5_1024x.png?v=1606782113' },
	{ fullName: 'Susane Violet', pronouns: 'He/Him', profileImageURL: 'https://www.shenandoahpaint.com/cdn/shop/products/A3CDB5_1024x.png?v=1606782113' },
	{ fullName: 'David Moon', pronouns: 'He/Him', profileImageURL: 'https://www.shenandoahpaint.com/cdn/shop/products/A3CDB5_1024x.png?v=1606782113' },
	{ fullName: 'George Li', pronouns: 'He/Him', profileImageURL: 'https://www.shenandoahpaint.com/cdn/shop/products/A3CDB5_1024x.png?v=1606782113' },
	{ fullName: 'John Doe', pronouns: 'He/Him', profileImageURL: 'https://www.shenandoahpaint.com/cdn/shop/products/A3CDB5_1024x.png?v=1606782113' },
	{ fullName: 'Sam West', pronouns: 'He/Him', profileImageURL: 'https://www.shenandoahpaint.com/cdn/shop/products/A3CDB5_1024x.png?v=1606782113' },
	{ fullName: 'Cassidy Hope', pronouns: 'He/Him', profileImageURL: 'https://www.shenandoahpaint.com/cdn/shop/products/A3CDB5_1024x.png?v=1606782113' },
	{ fullName: 'Matthew Ford', pronouns: 'He/Him', profileImageURL: 'https://www.shenandoahpaint.com/cdn/shop/products/A3CDB5_1024x.png?v=1606782113' },
	{ fullName: 'Jane Smith', pronouns: 'He/Him', profileImageURL: 'https://www.shenandoahpaint.com/cdn/shop/products/A3CDB5_1024x.png?v=1606782113' },
	{ fullName: 'Alex Johnson', pronouns: 'He/Him', profileImageURL: 'https://www.shenandoahpaint.com/cdn/shop/products/A3CDB5_1024x.png?v=1606782113' },
	{ fullName: 'Emily Davis', pronouns: 'He/Him', profileImageURL: 'https://www.shenandoahpaint.com/cdn/shop/products/A3CDB5_1024x.png?v=1606782113' },
	{ fullName: 'Michael Brown', pronouns: 'He/Him', profileImageURL: 'https://www.shenandoahpaint.com/cdn/shop/products/A3CDB5_1024x.png?v=1606782113' },
]

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

export const users = createContext(SAMPLE_USERS)
export const groups = createContext(SAMPLE_GROUPS)

const index = () => {
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
