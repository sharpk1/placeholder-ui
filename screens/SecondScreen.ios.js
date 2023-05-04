import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Linking, Button, Platform } from 'react-native'
import Step from '../components/Step'
import MyCarousel from '../components/MyCarousel'
import Ratings from '../components/Ratings'
import Deal2 from '../components/Deal2'
import { ScrollView, Stack, Image } from 'native-base'
import BottomSheet from '../components/BottomSheet'
import axios from 'axios'
import PunchedLeaf from '../components/PunchedLeaf'
import UnpunchedLeaf from '../components/UnpunchedLeaf'
import PunchCardLeaf from '../components/PunchCardLeaf'

export default function SecondScreeniOS({ route, navigation }) {
    const { image } = route.params
    const [punchCard, setPunchCard] = useState({})

    const imageArray = [
        'https://images.weedmaps.com/pictures/listings/972/068/143/423733479_dc7c2893-fbdb-41a0-b050-4001ab17c34f.jpg?w=400&h=400&dpr=2&auto=format&fit=crop',
        'https://images.weedmaps.com/pictures/listings/517/477/838/425848685_FxBksv9po9uXeZTxY-1.png?w=400&h=400&dpr=2&auto=format&fit=crop',
        'https://images.weedmaps.com/pictures/listings/517/477/838/426155319_WNXZg7uiC3skv2sEe-1.png?w=400&h=400&dpr=2&auto=format&fit=crop',
    ]

    const openMap = async (address, zipCode, city) => {
        const destination = encodeURIComponent(`${address} ${zipCode}, ${city}`)
        const provider = Platform.OS === 'ios' ? 'apple' : 'google'
        const link = `http://maps.${provider}.com/?daddr=${destination}`

        try {
            const supported = await Linking.canOpenURL(link)

            if (supported) Linking.openURL(link)
        } catch (error) {
            console.log(error)
        }
    }
    const fetchData = async () => {
        try {
            const response = await axios.get(
                'http://192.168.1.14:8000/users/loyalty/getPunchCardByStoreId',
                {
                    params: {
                        phoneNumber: '8328141282',
                        storeId: 1,
                    },
                },
            )
            console.log('response: ', response.data)
            setPunchCard(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <ScrollView>
                <View style={{backgroundColor: '#ffffff'}}>
                    {/* revamp this */}
                    {/* <Step punchCard={punchCard} /> */}
                    <PunchCardLeaf/>
                    {/* <PunchedLeaf width={50} height={50} />
                    <UnpunchedLeaf width={50} height={50} fill="#000000" /> */}
                    {/* On Android you cannot swipe */}
                    <MyCarousel image={image} />
                    {/* <Button
                        title="Hello"
                        onPress={() => {
                            fetchData()
                        }}
                    ></Button> */}
                    <Text style={{ fontSize: '32px', marginLeft: 10 }}>
                        Star Buds
                    </Text>
                    <Text
                        style={{ color: 'blue', marginLeft: 10 }}
                        onPress={() => {
                            openMap('5238 W 44th Avenue', '80212', 'Denver')
                        }}
                    >
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
                    {/* <TouchableOpacity>
                        <Image
                            source={{
                                uri: 'https://wallpaperaccess.com/full/317501.jpg',
                            }}
                            alt="Alternate Text"
                            size="xs"
                        />
                    </TouchableOpacity> */}
                    <BottomSheet />
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }}
                    />
                    {/* <BottomSheet /> */}
                    <View style={{ marginTop: 10 }}>
                        {imageArray.map((image, index) => {
                            return <Deal2 key={index} image={image} />
                        })}

                        {/* <Deal2 />
                        <Deal2 /> */}
                        {/* <StackExample></StackExample> */}
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
