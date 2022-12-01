import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, ScrollView } from 'native-base';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import Example from '../Card';

export default function HomeScreen({navigation}) {
  return (
    <NativeBaseProvider>
      <ScrollView>
 <View style={styles.container}>
      <Text>Hello World</Text>
      <StatusBar style="auto" />
      <Button
        title="Click me"
        onPress={() => navigation.navigate("Second")}
      />
      <TouchableHighlight onPress={() => {
        navigation.navigate("Second")
      }}>
        <Example/>
      </TouchableHighlight>
      
      <Example/>
      <Example/>
      <Example/>
      <Example/>
      
      
    </View>
    </ScrollView>
    </NativeBaseProvider>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 100
  },
});


{/* <View style={styles.container}>
       <Text>Hello World</Text>
       <StatusBar style="auto" />
       </View> */}