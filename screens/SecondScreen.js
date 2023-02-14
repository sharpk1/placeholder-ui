import { StyleSheet, Text, View, Image } from 'react-native'
import * as Progress from 'react-native-progress'
import { MilestoneProgressBar } from 'milestone-progress-bar'
import Step from '../components/Step'
import MyCarousel from '../components/MyCarousel'

export default function SecondScreen({ route, navigation }) {
    const { image } = route.params
    return (
        <>
            <View>
                <Step />
                <MyCarousel image={image} />
            </View>
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
