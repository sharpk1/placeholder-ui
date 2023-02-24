import { StyleSheet, Text, View } from 'react-native'
import Step from '../components/Step'

import { ScrollView, Stack, Image } from 'native-base'

export default function SecondScreenAndroid({ route, navigation }) {
    const { image } = route.params

    const imageArray = [
        'https://images.weedmaps.com/pictures/listings/972/068/143/423733479_dc7c2893-fbdb-41a0-b050-4001ab17c34f.jpg?w=400&h=400&dpr=2&auto=format&fit=crop',
        'https://images.weedmaps.com/pictures/listings/517/477/838/425848685_FxBksv9po9uXeZTxY-1.png?w=400&h=400&dpr=2&auto=format&fit=crop',
        'https://images.weedmaps.com/pictures/listings/517/477/838/426155319_WNXZg7uiC3skv2sEe-1.png?w=400&h=400&dpr=2&auto=format&fit=crop',
    ]

    return (
        <>
            <ScrollView>
                <View>
                    <Step />
                    {/* On Android you cannot swipe */}
                    {/* <MyCarousel image={image} /> */}
                    <Text style={{ marginLeft: 10 }}>Star Buds</Text>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
        // marginTop: 0,
        // new here vvv
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    logo: {
        marginTop: 20,
        width: '80%',
        height: '55%',
        borderRadius: '10px',
        // justifyContent: 'center',
        alignSelf: 'center',
        // backgroundColor: '#fff',
    },
    // container2: {
    //     display: 'flex',
    //     backgroundColor: '#fff',
    //     // alignItems: 'center',
    //     // justifyContent: 'center',

    //     // new here vvv
    // },
})
