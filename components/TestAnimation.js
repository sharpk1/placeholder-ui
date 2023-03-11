import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
} from 'react-native-reanimated'
import { StyleSheet, Button, View } from 'react-native'
import ScrollAnimation from './ScrollAnimation'
import RNC from 'react-native-css'
import { AntDesign } from '@expo/vector-icons'

const TestAnimation = () => {
    const offset = useSharedValue(0)

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: withSpring(offset.value * 100),
                },
            ],
        }
    })

    const styles = RNC`
        description {
          margin-bottom: 20px;
          font-size: 12;
          text-align: center;
          color: 'black';
        }

        container {
          padding: 30px;
          margin-top: 65px;
          align-items: center;
          display: block;
        }
        scrollDown{
            align-self: 'center';
            height: 50px;
            width: 30px;
            border: 2px solid black;
            position: absolute;
            left: 50%;
            bottom: 20px;
            border-radius: 50px;
            cursor: pointer;
          }
          scrollDown::before,
          scrollDown::after{
            content: '';
            position: absolute;
            top: 20%;
            left: 50%;
            height: 10px;
            width: 10px;
            transform:translate(-50%, -100%) rotate(45deg);
            border: 2px solid black;
            border-top: transparent;
            border-left: transparent;
            animation: scrollDown 1s ease-in-out infinite;
          }
          scrollDown::before{
            top: 30%;
            animation-delay: .3s;
            /* animation: scrollDown 1s ease-in-out infinite; */
          }
          
          @keyframes scrollDown{
            0%{
              /* top:20%; */
              opacity: 0;
            }
            30%{
              opacity: 1;
            }
            60%{
              opacity: 1;
            }
            100%{
              top:90%;
              opacity:0;
            }
          }
      `

    return (
        <>
            <View>
                <Animated.View style={[, animatedStyles]}>
                    <ScrollAnimation />
                </Animated.View>
                <Animated.View style={[, animatedStyles]}>
                    <AntDesign name="down" size={24} color="black" />
                </Animated.View>
                <Button
                    onPress={() => (offset.value = Math.random())}
                    title="Move"
                />
            </View>
            <View></View>
        </>
    )
}

const styles1 = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 900,
    },
    box: {
        // flex: 1,
        height: 100,
        width: 100,
        backgroundColor: 'pink',
    },
    scrollDown: {
        alignSelf: 'center',
        height: 50,
        width: 30,
        border: '2px solid black',
        backgroundColor: 'black',
        bottom: 20,
        borderRadius: 50,
        cursor: 'pointer',
    },
    chevron: {
        // alignSelf: 'center',
        content: '',
        position: 'absolute',
        // top: '20%',
        // left: '50%',
        height: 100,
        width: 100,
        transform: [
            { translateX: -50 },

            { rotate: '45deg' },
            { translateY: -100 },
        ],
        border: '2px solid black',
        // borderTopColor: 'black',
        borderLeftColor: 'black',
        backgroundColor: 'rgba(158, 150, 150, .5)',
        marginTop: 50,
        animation: 'scroll-down 1s ease-in-out infinite',
        borderTopColor: 'rgba(158, 150, 150, .5)',
    },
})

export default TestAnimation
