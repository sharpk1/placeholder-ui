import HomeScreen from './screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SecondScreeniOS from './screens/SecondScreen.ios'
import SecondScreenAndroid from './screens/SecondScreen.android'
import LoginScreen from './screens/LoginScreen'
import { useFonts } from 'expo-font'
import { NativeBaseProvider } from 'native-base'
import { Platform, StyleSheet } from 'react-native'
import SignUpScreeniOS from './screens/SignUpScreen.ios'

const Stack = createNativeStackNavigator()

export default function App() {
    const [loaded] = useFonts({
        'Celias-Bold': require('./fonts/Celias-Bold.ttf'),
    })

    if (!loaded) {
        return null
    }

    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Stack.Navigator
                // screenOptions={{
                //     headerShown: false,
                // }}
                >
                    <Stack.Screen
                        name="SignUp"
                        component={SignUpScreeniOS}
                        options={{ title: '', headerShown: false }}
                    />
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ title: '', headerShown: false }}
                    />
                    <Stack.Screen
                        name="Scanner"
                        component={LoginScreen}
                        options={{ title: 'Scanner' }}
                    />

                    {Platform.OS === 'ios' ? (
                        <Stack.Screen
                            name="Second"
                            component={SecondScreeniOS}
                            options={{ title: 'Second' }}
                        />
                    ) : (
                        <Stack.Screen
                            name="Second"
                            component={SecondScreenAndroid}
                            options={{ title: 'Second' }}
                        />
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    )
}
