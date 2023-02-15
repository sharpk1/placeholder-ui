import { StyleSheet, Text, View } from 'react-native'
import Step from '../components/Step'
import MyCarousel from '../components/MyCarousel'
import Ratings from '../components/Ratings'
import Deal from '../components/Deal'
import Deal2 from '../components/Deal2'
import { ScrollView, Stack } from 'native-base'
import StackExample from '../components/StackExample'

export default function SecondScreen({ route, navigation }) {
    const { image } = route.params

    return (
        <>
            <ScrollView>
                <View>
                    <Step />
                    <MyCarousel image={image} />
                    <Text style={{ fontSize: '32px', marginLeft: 10 }}>
                        Star Buds
                    </Text>
                    <Text style={{ color: 'blue', marginLeft: 10 }}>
                        5238 W 44th Ave, Denver, CO 80212 - 3 miles away
                    </Text>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View>
                            <Ratings />
                        </View>
                        {/* TODO: Is this clean? */}
                        <View style={{ paddingTop: 13 }}>
                            <Text>74 Reviews</Text>
                        </View>
                    </View>
                    <Text
                        style={{
                            fontSize: '16px',
                            marginLeft: 10,
                            marginTop: 15,
                        }}
                    >
                        Daily Deals
                    </Text>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }}
                    />

                    <View style={{ marginTop: 10 }}>
                        {/* <Deal /> */}
                        <Deal2 />
                        <Deal2 />
                        <Deal2 />
                        <StackExample></StackExample>
                    </View>
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
