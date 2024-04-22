import React from 'react'
import { Text, View, TouchableOpacity, SafeAreaView, Image, Pressable } from 'react-native'
import styles from '../../styles/discoverPage.js'
import { Link, router } from 'expo-router'
import discoverInfo from "../../services/discoverInfo.js"

const groupForYou = () => {
	return (
		<SafeAreaView>
			<View style={styles.banner}>
				<Text style={styles.bannerHeading}>For You</Text>
			</View>

			<Pressable onPress={() => router.push('discover')}>
				<Text>Go back to Discover page</Text>
			</Pressable>

			<View style={styles.groupsContainer}>
				{discoverInfo.suggestedGroups.map((group, index) => (
					<View key={index} style={styles.groupItem}>
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

export default groupForYou
