import {Stack} from 'expo-router';

export default function AppEntry() {
return <Stack>
<Stack.Screen name="(Onboarding)" options={{ headerShown: false }} />
<Stack.screen name = "(HomeScreen)" options={{headerShown:false}}/>
</Stack>


};


