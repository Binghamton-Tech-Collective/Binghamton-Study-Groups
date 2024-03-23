import { Stack } from 'expo-router'

const HomepageLayout = () => {
	return (
		<Stack screenOptions= {{}}>
			<Stack.Screen name = "(Tabs)" options = {{headerShown:false}} />
			<Stack.Screen name="forYou" options={{ headerShown: false }} />
			<Stack.Screen name="groupForYou" options={{ headerShown: false }} />
		</Stack>
	)
}

export default HomepageLayout
