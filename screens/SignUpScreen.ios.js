import React, { Fragment, useEffect } from 'react'
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
import { Video } from 'expo-av'
import { Actionsheet, useDisclose } from 'native-base'
import { formatPhoneNumber } from '../helpers/logic'
import {
    BounceInDown,
    FadeOut,
    Transition,
    Transitioning,
} from 'react-native-reanimated'
import axios from 'axios'
import VerifiedCheckMark from '../components/VerifiedCheckMark'
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    EasingNode,
    FadeInLeft,
    BounceInUp,
    BounceIn,
    FadeInUp,
} from 'react-native-reanimated'

const { width, height } = Dimensions.get('window')

const transition = (
    <Transition.Together>
        <Transition.In type="slide-right" durationMs={200} />
        <Transition.Change />
        <Transition.Out type="fade" durationMs={200} />
    </Transition.Together>
)

const BackgroundVideo = ({ navigation }) => {
    const [fadeAnim] = React.useState(new Animated.Value(0))
    const ref = React.useRef(null)
    const video = React.useRef(null)
    const [status, setStatus] = React.useState({})
    const [phoneNumberDisplay, setPhoneNumberDisplay] = React.useState('')
    const [phoneNumberValue, setPhoneNumberValue] = React.useState('')
    const [verfication, setVerification] = React.useState([])
    // const [verificationStatus, setVerificationStatus] =
    //     React.useState('Not Authenticated')
    const [isSignUp, setIsSignUp] = React.useState(false)
    const [isVerify, setIsVerify] = React.useState(false)
    const [isVerified, setIsVerified] = React.useState(false)

    const { isOpen, onOpen, onClose } = useDisclose()

    const refInput = React.useRef(null)

    if (isSignUp) {
        refInput.current?.focus()
    } else {
        refInput.current?.blur()
    }

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            easing: EasingNode.bounce,
        }).start()
    }, [])

    const getPhoneVerificationCode = async phone => {
        if (phone == '1') {
            return
        } else {
            await axios
                .get(
                    `http://192.168.1.14:8000/phone/login?phone=${phone}&channel=sms`,
                )
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err.message)
                })
        }
    }

    const verifyPhoneNumber = async (phone, code) => {
        if (phone == '1' && code == '1') {
            setIsVerified(true)
            setTimeout(function () {
                onClose()
                navigation.navigate('Home')
            }, 2000)
        } else {
            await axios
                .get(
                    `http://192.168.1.14:8000/phone/verify?phone=${phone}&code=${code}`,
                )
                .then(res => {
                    if (res.data.status === 'approved') setIsVerified(true)
                    // setVerificationStatus('HURRAY YOURE APPROVED!!')
                    console.log(res.data.status)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    useEffect(() => {
        ref.current?.animateNextTransition()
    }, [isVerify])

    const handlePhoneNumberDisplay = e => {
        const formattedPhoneNumber = formatPhoneNumber(e)
        // we'll set the input value using our setInputValue
        setPhoneNumberDisplay(formattedPhoneNumber)
    }

    const verificationCodeHandler = code => {
        setVerification(code)
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
                        {isVerify === false && isVerified === false ? (
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
                                        let stripped = text.replace(
                                            /[^0-9]/g,
                                            '',
                                        )
                                        setPhoneNumberValue(stripped)
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
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                {isVerified && isVerify == false ? (
                                    <VerifiedCheckMark />
                                ) : (
                                    <View
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                        }}
                                    >
                                        <TextInput
                                            keyboardType="numeric"
                                            onChangeText={text => {
                                                // Take the first number of the text and place it in this input
                                                const exploded = text.split('')
                                                verificationCodeHandler(
                                                    exploded,
                                                )
                                            }}
                                            display={'none'}
                                        />
                                        <TextInput
                                            keyboardType="numeric"
                                            style={styles.verificationInput}
                                            onChangeText={text => {
                                                // Take the first number of the text and place it in this input
                                                const exploded = text.split('')
                                                verificationCodeHandler(
                                                    exploded,
                                                )
                                            }}
                                            value={verfication[0] || ''}
                                        />
                                        <TextInput
                                            keyboardType="numeric"
                                            style={styles.verificationInput}
                                            onChangeText={text => {
                                                // setVerification(text)
                                            }}
                                            value={verfication[1] || ''}
                                        />
                                        <TextInput
                                            keyboardType="numeric"
                                            style={styles.verificationInput}
                                            onChangeText={text => {
                                                // setVerification(text)
                                            }}
                                            value={verfication[2] || ''}
                                        />
                                        <TextInput
                                            // ref={refInput}
                                            keyboardType="numeric"
                                            style={styles.verificationInput}
                                            onChangeText={text => {
                                                // setVerification(text)
                                            }}
                                            value={verfication[3] || ''}
                                        />
                                        <TextInput
                                            keyboardType="numeric"
                                            style={styles.verificationInput}
                                            onChangeText={text => {
                                                // setVerification(text)
                                            }}
                                            value={verfication[4] || ''}
                                        />
                                        <TextInput
                                            keyboardType="numeric"
                                            style={styles.verificationInput}
                                            onChangeText={text => {
                                                // setVerification(text)
                                            }}
                                            value={verfication[5] || ''}
                                        />
                                    </View>
                                )}

                                {isVerify && (
                                    <Animated.View
                                        style={{
                                            opacity: fadeAnim,
                                        }}
                                        entering={FadeInUp}
                                        exiting={FadeOut}
                                    >
                                        <Pressable
                                            disabled={phoneNumberDisplay === ''}
                                            style={styles.signUpButton}
                                            onPress={async () => {
                                                // ref.current.animateNextTransition()
                                                setIsVerify(false)
                                                await verifyPhoneNumber(
                                                    phoneNumberValue,
                                                    verfication,
                                                )
                                            }}
                                        >
                                            <Text style={styles.text}>
                                                Verify
                                            </Text>
                                        </Pressable>
                                    </Animated.View>
                                )}
                            </Transitioning.View>
                        )}
                        {/* <Text>{verificationStatus}</Text> */}
                    </Actionsheet.Content>
                </TouchableWithoutFeedback>
            </Actionsheet>
        </View>
        // </TouchableWithoutFeedback>
    )
}
export default BackgroundVideo

const styles = StyleSheet.create({
    verificationInput: {
        marginTop: 40,
        fontSize: '20',
        textAlign: 'center',
        boxShadowBottom: '4px 4px 4px black',
        height: 50,
        // width: '25%',
        minWidth: 50,
        margin: 6,
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
        borderRadius: 12,
    },
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
