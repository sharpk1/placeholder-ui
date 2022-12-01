// import { StatusBar } from 'expo-status-bar';
// import { NativeBaseProvider, ScrollView } from 'native-base';
// import { StyleSheet, Text, View } from 'react-native';
// import Example from './Card'

// export default function App() {
//   return (
//     <NativeBaseProvider>
//       <ScrollView>
//  <View style={styles.container}>
//       <Text>Hello World</Text>
//       <StatusBar style="auto" />
      
//       <Example/>
//       <Example/>
//       <Example/>
//       <Example/>
//       <Example/>
      
      
//     </View>
//     </ScrollView>
//     </NativeBaseProvider>
   
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 100
//   },
// });
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SecondScreen from "./screens/SecondScreen";

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: "Welcome"}}
        />
        <Stack.Screen
          name="Second"
          component={SecondScreen}
          options={{title: "Second"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}