import React, { useRef, useEffect } from 'react'
import { Button, StyleSheet, View, Animated } from 'react-native'
import LottieView from 'lottie-react-native'

const VerifiedCheckMark = () => {
    const progress = useRef(new Animated.Value(0)).current
    const animation = useRef(null)
    useEffect(() => {
        // You can control the ref programmatically, rather than using autoPlay
        // animation.current?.play();
        handleLikeAnimation()
    }, [])

    const handleLikeAnimation = () => {
        Animated.timing(progress, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start()
    }

    return (
        <View style={styles.animationContainer}>
            <LottieView
                progress={progress}
                autoPlay
                ref={animation}
                style={{
                    width: 200,
                    height: 200,
                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require('../assets/check.json')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    animationContainer: {
        // backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        // flex: 1,
    },
    buttonContainer: {
        paddingTop: 20,
    },
})

export default VerifiedCheckMark
