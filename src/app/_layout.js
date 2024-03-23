import { Stack } from 'expo-router'

export default function AppEntry() {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="(Onboarding)" options={{ headerShown: false }} />
			
		</Stack>
	)
}
