import {Stack} from 'expo-router';

const SignInLayout = () => {
return <Stack>
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <Stack.Screen name="userInfo" options={{ headerShown: false }} />
    </Stack>


};


export default SignInLayout;