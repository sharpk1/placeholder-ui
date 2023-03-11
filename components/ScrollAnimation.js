import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import styled from 'styled-components/native'
// import RenderHtml from 'react-native-render-html'
import RNC from 'react-native-css'
import { AntDesign } from '@expo/vector-icons'
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
} from 'react-native-reanimated'

//TODO: work on this. it's a nice to have moreso than a need to have
const ScrollAnimation = () => {
    const offset = useSharedValue(0)

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: withSpring(offset.value * 100),
                },
            ],
        }
    })
    const source = {
        html: `
        <div class="scroll-down"></div>
      `,
    }

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
        <View>
            <View style={styles.scrollDown}>
                <Animated.View style={[, animatedStyles]}>
                    <AntDesign name="down" size={24} color="black" />
                </Animated.View>
                <Button
                    onPress={() => (offset.value = Math.random())}
                    title="Move"
                />
            </View>
        </View>
    )
}

// const styles = StyleSheet.create({
//     scroll: {
//         width: 60,
// 	height: 60,
// 	border: '2px solid #333',
// 	border-radius: '50%',
// 	position: 'relative',
// 	animation: 'down 1.5s infinite',
// 	-webkit-animation: 'down 1.5s infinite',
// 	&::before {
// 		content: '',
// 		position: absolute,
// 		top: 15px,
// 		left: 18px,
// 		width: 18px,
// 		height: 18px,
// 		border-left: 2px solid #333,
//   	border-bottom: 2px solid #333,
// 		transform: rotate(-45deg),
// 	}
//     },
// })

export default ScrollAnimation
