import React, { useState, useContext } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView, Image, Pressable } from 'react-native'
import { groups } from './(Tabs)/discover.js'
import styles from '../../styles/discoverPage.js'
import { Link, router } from 'expo-router'

const groupForYou = () => {
	const SAMPLE_GROUPS = useContext(groups)

	return (
		<SafeAreaView>
			<View style={styles.banner}>
				<Text style={styles.bannerHeading}>For You</Text>
			</View>

			<Pressable onPress={() => router.push('discover')}>
				<Text>Go back to Discover page</Text>
			</Pressable>

			<View style={styles.groupsContainer}>
				{SAMPLE_GROUPS.map((group) => (
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

export default groupForYou
