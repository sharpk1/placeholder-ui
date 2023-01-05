import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider, ScrollView } from 'native-base'
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableHighlight,
} from 'react-native'
import Example from '../Card'

export default function HomeScreen({ navigation }) {
    const dispos = [
        'https://beyond-hello.com/wp-content/uploads/elementor/thumbs/grover-beach-beyond-hello-dispensary-interior-pooj5d3vn5alhx5qu80silb3l65dhoum8fv63r3326.jpg',
        'https://assets3.thrillist.com/v1/image/3068046/960x640/flatten;crop;webp=auto;jpeg_quality=60.jpg',
        'https://assets3.thrillist.com/v1/image/3067594/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70',
        'https://leafly-cms-production.imgix.net/wp-content/uploads/2019/01/10130954/cannabliss-co-portland.jpg',
        'https://assets.website-files.com/60f616111b115763029724b7/614b662d740582085a3c52aa_612ea1f1255d20384de10b86_alternative-releaf-dispensary-libby-montana%20(1)%20-%20Copy.jpg',
    ]

    // var len = dispos.length
    // for (var i = len; i < 2 * len; i++) dispos[i] = dispos[i - len]

    return (
        <NativeBaseProvider>
            <ScrollView>
                <View style={styles.container}>
                    {/* <Text>Hello World</Text> */}
                    <StatusBar style="auto" />
                    <Button
                        title="Click me"
                        onPress={() => navigation.navigate('Login')}
                    />
                    {dispos.map(image => {
                        return (
                            <TouchableHighlight
                                key={image}
                                onPress={() => {
                                    navigation.navigate('Second')
                                }}
                            >
                                <Example fileName={image} />
                            </TouchableHighlight>
                        )
                    })}
                </View>
            </ScrollView>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 100
    },
})
