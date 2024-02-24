import { Stack } from 'expo-router'

const HomepageLayout = () => {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen name="discover" options={{ headerShown: false }} />
			<Stack.Screen name="forYou" options={{ headerShown: false }} />
			<Stack.Screen name="groupForYou" options={{ headerShown: false }} />
		</Stack>
	)
}

export default HomepageLayout
