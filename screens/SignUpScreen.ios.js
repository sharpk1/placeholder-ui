import React, { Component, Fragment, useEffect } from 'react'
import {
    Text,
    View,
    Pressable,
    StyleSheet,
    Dimensions,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native'
import styled from 'styled-components/native'
import { Video, AVPlaybackStatus } from 'expo-av'
import { Actionsheet, useDisclose, Input } from 'native-base'
import { formatPhoneNumber } from '../helpers/logic'
import Animated, {
    Transition,
    Transitioning,
    BounceIn,
    FadeInRight,
    FadeOutLeft,
    SlideInRight,
} from 'react-native-reanimated'
import axios from 'axios'

const { width, height } = Dimensions.get('window')

const transition = (
    <Transition.Together>
        <Transition.In type="slide-right" durationMs={200} />
        <Transition.Change />
        <Transition.Out type="slide-left" durationMs={200} />
    </Transition.Together>
)

const BackgroundVideo = () => {
    const ref = React.useRef(null)
    const video = React.useRef(null)
    const [status, setStatus] = React.useState({})
    const [phoneNumberDisplay, setPhoneNumberDisplay] = React.useState('')
    const [phoneNumberValue, setPhoneNumberValue] = React.useState('')
    const [verfication, setVerification] = React.useState('')
    const [verificationStatus, setVerificationStatus] =
        React.useState('Not Authenticated')
    const [isSignUp, setIsSignUp] = React.useState(false)
    const [isVerify, setIsVerify] = React.useState(false)

    const { isOpen, onOpen, onClose } = useDisclose()

    const refInput = React.useRef(null)

    if (isSignUp) {
        refInput.current?.focus()
    } else {
        refInput.current?.blur()
    }

    const getPhoneVerificationCode = async (phone, channel) => {
        await axios
            .get(
                `http://localhost:8000/phone/login?phone=${phone}&channel=${channel}`,
            )
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const verifyPhoneNumber = async (phone, code) => {
        console.log(phone)
        await axios
            .get(
                `http://localhost:8000/phone/verify?phone=${phone}&code=${code}`,
            )
            .then(res => {
                if (res.data.status === 'approved')
                    setVerificationStatus('HURRAY YOURE APPROVED!!')
                console.log(res.data.status)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        ref.current?.animateNextTransition()
    }, [isVerify])

    const handlePhoneNumberDisplay = e => {
        // this is where we'll call our future formatPhoneNumber function that we haven't written yet.
        const formattedPhoneNumber = formatPhoneNumber(e)
        // we'll set the input value using our setInputValue
        setPhoneNumberDisplay(formattedPhoneNumber)
    }

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
                        <Pressable
                            style={styles.button}
                            onPress={() => {
                                onOpen()
                                setIsSignUp(true)
                            }}
                        >
                            <Text style={styles.text}>Create Account</Text>
                        </Pressable>

                        <Button bor transparent title="Login" />
                    </Fragment>
                </ButtonWrapper>
            </Wrapper>

            <Actionsheet
                isOpen={isOpen}
                onClose={onClose}
                _backdrop={false}
                useRNModal={true}
                disableOverlay={false}
            >
                <TouchableWithoutFeedback
                    onPress={() => {
                        Keyboard.dismiss()
                        setIsSignUp(false)
                    }}
                >
                    <Actionsheet.Content height={'lg'}>
                        {/* <Actionsheet.Item>Option 1</Actionsheet.Item>
                    <Actionsheet.Item>Option 2</Actionsheet.Item>
                    <Actionsheet.Item>Option 3</Actionsheet.Item> */}
                        {/* <Input
                        marginTop={50}
                        width={'xs'}
                        height={'10'}
                        backgroundColor={'white'}
                        borderWidth="0"
                        style={styles.phoneNumberInput}
                        keyboardType="numeric"
                    /> */}
                        {isVerify === false ? (
                            <Transitioning.View
                                ref={ref}
                                transition={transition}
                            >
                                <TextInput
                                    ref={refInput}
                                    keyboardType="numeric"
                                    style={styles.input}
                                    onChangeText={text => {
                                        handlePhoneNumberDisplay(text)
                                        setPhoneNumberValue(text)
                                    }}
                                    value={phoneNumberDisplay}
                                    placeholder="Phone Number"
                                    placeholderTextColor={'gray'}
                                    onFocus={() => {
                                        setIsSignUp(true)
                                    }}
                                />
                                <Pressable
                                    disabled={phoneNumberDisplay === ''}
                                    style={styles.signUpButton}
                                    onPress={async () => {
                                        ref.current.animateNextTransition()
                                        setIsVerify(true)
                                        await getPhoneVerificationCode(
                                            phoneNumberValue,
                                            'sms',
                                        )
                                    }}
                                >
                                    <Text style={styles.text}>Continue</Text>
                                </Pressable>
                            </Transitioning.View>
                        ) : (
                            <Transitioning.View
                                ref={ref}
                                transition={transition}
                            >
                                <TextInput
                                    ref={refInput}
                                    keyboardType="numeric"
                                    style={styles.input}
                                    onChangeText={text => {
                                        setVerification(text)
                                    }}
                                    value={verfication}
                                    placeholder="Phone Number"
                                    placeholderTextColor={'gray'}
                                    onFocus={() => {
                                        setIsSignUp(true)
                                    }}
                                />
                                {/* <TextInput
                                    ref={refInput}
                                    keyboardType="numeric"
                                    style={styles.input}
                                    onChangeText={text => {
                                        handlePhoneNumberDisplay(text)
                                    }}
                                    value={phoneNumberDisplay}
                                    placeholder="Phone Number"
                                    placeholderTextColor={'gray'}
                                    onFocus={() => {
                                        setIsSignUp(true)
                                    }}
                                />
                                <TextInput
                                    ref={refInput}
                                    keyboardType="numeric"
                                    style={styles.input}
                                    onChangeText={text => {
                                        handlePhoneNumberDisplay(text)
                                    }}
                                    value={phoneNumberDisplay}
                                    placeholder="Phone Number"
                                    placeholderTextColor={'gray'}
                                    onFocus={() => {
                                        setIsSignUp(true)
                                    }}
                                /> */}
                                <Pressable
                                    disabled={phoneNumberDisplay === ''}
                                    style={styles.signUpButton}
                                    onPress={async () => {
                                        ref.current.animateNextTransition()
                                        setIsVerify(false)
                                        await verifyPhoneNumber(
                                            phoneNumberValue,
                                            verfication,
                                        )
                                    }}
                                >
                                    <Text style={styles.text}>Verify</Text>
                                </Pressable>
                            </Transitioning.View>
                        )}
                        <Text>{verificationStatus}</Text>
                    </Actionsheet.Content>
                </TouchableWithoutFeedback>
            </Actionsheet>
        </View>
        // </TouchableWithoutFeedback>
    )
}
export default BackgroundVideo

const styles = StyleSheet.create({
    signUpButton: {
        width: 250,
        backgroundColor: '#44e36f',
        padding: 15,
        border: '1px solid #f3f8ff ',
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 24,
        alignSelf: 'center',
    },
    input: {
        marginTop: 40,
        fontSize: '20',
        textAlign: 'center',
        boxShadowBottom: '4px 4px 4px black',
        height: 50,
        width: '75%',
        minWidth: 300,
        margin: 12,
        borderWidth: 0,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        backgroundColor: 'white',
        shadowOpacity: 0.2,
        shadowRadius: 6.68,
        borderRadius: 24,
    },
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
    button: {
        width: 250,
        backgroundColor: '#f3f8ff',
        padding: 15,
        border: '1px solid #f3f8ff ',
        justifyContent: 'center',
        marginBottom: 20,
        borderRadius: 24,
    },
    text: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: 3,
        color: 'black',
        textAlign: 'center',
    },
    phoneNumberInput: {
        display: 'none',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 10,
        shadowOpacity: 1,
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
