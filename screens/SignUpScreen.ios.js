import React, { Component, Fragment } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from 'react-native'
import styled from 'styled-components/native'
// import Video from 'react-native-video'
import { Video, AVPlaybackStatus } from 'expo-av'
const { width, height } = Dimensions.get('window')

const BackgroundVideo = () => {
    const video = React.useRef(null)
    const [status, setStatus] = React.useState({})
    return (
        <View>
            <Video
                ref={video}
                style={styles.backgroundVideo}
                source={require('../assets/video1.mp4')}
                resizeMode="cover"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
                shouldPlay={true}
                useNativeControls={false}
            />

            <Wrapper>
                <Title>Join Live And on-demand classes</Title>
                <TextDescription>
                    With world-class instructions right here, right now
                </TextDescription>
                <ButtonWrapper>
                    <Fragment>
                        <TouchableOpacity
                            onPress={() => {
                                console.log('hey')
                            }}
                        >
                            <Button
                                style={{
                                    color: 'black',
                                }}
                                title="Create Account"
                            />
                        </TouchableOpacity>

                        <Button bor transparent title="Login" />
                    </Fragment>
                </ButtonWrapper>
            </Wrapper>
        </View>
    )
}
export default BackgroundVideo

const styles = StyleSheet.create({
    backgroundVideo: {
        height: height,
        position: 'absolute',
        top: 0,
        left: 0,
        alignItems: 'stretch',
        bottom: 0,
        right: 0,
        opacity: 0.95,
    },
})

// styled-component

export const Wrapper = styled.View`
    justify-content: space-between;
    padding: 20px;
    align-items: center;
    flex-direction: column;
`
export const Logo = styled.Image`
    max-width: 100px;
    width: 100px;
    height: 100px;
`
export const TextDescription = styled.Text`
    letter-spacing: 3px;
    color: #f4f4f4;
    text-align: center;
    text-transform: uppercase;
`
export const ButtonWrapper = styled.View`
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`
export const Title = styled.Text`
    color: #f4f4f4;
    margin: 50% 0px 20px;
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 3px;
`
const StyledButton = styled.TouchableHighlight`
 width:250px;
 background-color:${props => (props.transparent ? 'transparent' : '#f3f8ff')};
 padding:15px;
border:${props => (props.transparent ? '1px solid #f3f8ff ' : 0)}
 justify-content:center;
 margin-bottom:20px;
 border-radius:24px
`
StyledTitle = styled.Text`
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    letter-spacing: 3px;
    color: ${props => (props.transparent ? '#f3f8ff ' : '#666')};
`

export const Button = ({ onPress, color, ...props }) => {
    return (
        <StyledButton {...props}>
            <StyledTitle {...props}>{props.title}</StyledTitle>
        </StyledButton>
    )
}

// after here is the new code

// import * as React from 'react'
// import { View, StyleSheet, Button } from 'react-native'
// import { Video, AVPlaybackStatus } from 'expo-av'

// export default function App() {
//     const video = React.useRef(null)
//     const [status, setStatus] = React.useState({})
//     return (
//         <View style={styles.container}>
//             <Video
//                 ref={video}
//                 style={styles.video}
//                 source={require('../assets/video1.mp4')}
//                 useNativeControls
//                 resizeMode="contain"
//                 isLooping
//                 onPlaybackStatusUpdate={status => setStatus(() => status)}
//             />
//             <View style={styles.buttons}>
//                 <Button
//                     title={status.isPlaying ? 'Pause' : 'Play'}
//                     onPress={() =>
//                         status.isPlaying
//                             ? video.current.pauseAsync()
//                             : video.current.playAsync()
//                     }
//                 />
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         backgroundColor: '#ecf0f1',
//     },
//     video: {
//         alignSelf: 'center',
//         width: 320,
//         height: 200,
//     },
//     buttons: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// })
