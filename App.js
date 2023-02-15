import HomeScreen from './screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SecondScreen from './screens/SecondScreen'
import LoginScreen from './screens/LoginScreen'
import { useFonts } from 'expo-font'
import { NativeBaseProvider } from 'native-base'

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
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ title: '' }}
                    />
                    <Stack.Screen
                        name="Second"
                        component={SecondScreen}
                        options={{ title: 'Second' }}
                    />
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{ title: 'Login' }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    )
}
