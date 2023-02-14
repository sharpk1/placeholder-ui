import React, { useState } from 'react'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps'
import { View, Text } from 'react-native'
import StepIndicator from 'react-native-step-indicator'

const Step = () => {
    const [currentPosition, setCurrentPosition] = useState(0)
    const labels = [
        'First visit',
        'Second visit',
        'Third visit',
        'Fourth visit',
        'Fifth visit',
    ]
    const customStyles = {
        stepIndicatorSize: 25,
        currentStepIndicatorSize: 30,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 3,
        stepStrokeCurrentColor: 'green',
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: '#fe7013',
        stepStrokeUnFinishedColor: '#aaaaaa',
        separatorFinishedColor: '#fe7013',
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: '#fe7013',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 13,
        stepIndicatorLabelCurrentColor: 'green',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelColor: '#999999',
        labelSize: 13,
        currentStepLabelColor: 'green',
    }

    const onPageChange = position => {
        setCurrentPosition(position)
    }

    return (
        <View style={{ paddingTop: 20 }}>
            <StepIndicator
                customStyles={customStyles}
                currentPosition={currentPosition}
                labels={labels}
                onPageChange={e => {
                    onPageChange(e)
                }}
            />
        </View>
    )
}

const StepC = () => {
    return (
        <View style={{ flex: 1 }}>
            <ProgressSteps>
                <ProgressStep
                    previousBtnDisabled={false}
                    nextBtnDisabled={true}
                    nextBtnTextStyle={{ display: 'none' }}
                    label="First Step"
                >
                    <View style={{ alignItems: 'center' }}>
                        <Text>This is the content within step 1!</Text>
                    </View>
                </ProgressStep>
                <ProgressStep
                    previousBtnDisabled={false}
                    nextBtnDisabled={true}
                    label="Second Step"
                >
                    <View style={{ alignItems: 'center' }}>
                        <Text>This is the content within step 2!</Text>
                    </View>
                </ProgressStep>
                <ProgressStep
                    previousBtnDisabled={false}
                    nextBtnDisabled={true}
                    label="Third Step"
                >
                    <View style={{ alignItems: 'center' }}>
                        <Text>This is the content within step 3!</Text>
                    </View>
                </ProgressStep>
            </ProgressSteps>
            <StepComponent />
        </View>
    )
}

export default Step
