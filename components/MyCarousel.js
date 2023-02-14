import React, { useState } from 'react'
import { Dimensions, View, Image } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import ExampleDotPaginate from './Example'

const MyCarousel = props => {
    const { image } = props

    const [currentIndex, setCurrentIndex] = useState(0)
    const width = Dimensions.get('window').width
    const pageNumbers = [...new Array(6).keys()]
    return (
        <>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Carousel
                    loop
                    width={width / 1.25}
                    height={width / 2}
                    data={pageNumbers}
                    scrollAnimationDuration={500}
                    onSnapToItem={index => {
                        setCurrentIndex(index)
                    }}
                    renderItem={({ index }) => (
                        <View
                            style={{
                                flex: 1,
                                borderWidth: 1,
                                justifyContent: 'center',
                                borderRadius: '10px',
                                marginTop: 10,
                            }}
                        >
                            <Image
                                source={{
                                    uri: image,
                                }}
                                style={{
                                    flex: 1,
                                    textAlign: 'center',
                                    fontSize: 30,
                                    borderRadius: '10px',
                                }}
                            />
                        </View>
                    )}
                />
                <View style={{ bottom: -240, position: 'absolute' }}>
                    <ExampleDotPaginate
                        pages={pageNumbers.length}
                        currentIndex={currentIndex}
                    />
                </View>
            </View>
        </>
    )
}

export default MyCarousel
