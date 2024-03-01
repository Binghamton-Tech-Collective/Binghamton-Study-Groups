import { Stack } from 'expo-router'

const SignInLayout = () => {
	return (
		// FLOW:
		// INDEX (LOGIN) -> SIGNUP (EMAIL/PHONE #) -> USER SETUP (FULL NAME AND PASSWORD) -> USERINFO (MAJOR, GRADUATION YEAR)

		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen name="signup" options={{ headerShown: false }} />
			<Stack.Screen name="userSetup" options={{ headerShown: false }} />
			<Stack.Screen name="userInfo" options={{ headerShown: false }} />
		</Stack>
	)
}

export default SignInLayout
