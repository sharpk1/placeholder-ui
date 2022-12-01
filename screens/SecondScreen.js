import { StyleSheet, Text, View } from 'react-native';


export default function SecondScreen({navigation}) {
  return (
 <View style={styles.container}>
     <Text>Second Screen</Text>
    </View>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  },
});
