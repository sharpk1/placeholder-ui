import React, { useState } from 'react'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps'
import { View, Text } from 'react-native'
import StepIndicator from 'react-native-step-indicator'

const Step = () => {
    const [currentPosition, setCurrentPosition] = useState(3)
    const labels = [
        '1st visit',
        '2nd visit',
        '3rd visit',
        '4th visit',
        '5th visit',
    ]
    const customStyles = {
        stepIndicatorSize: 25,
        currentStepIndicatorSize: 30,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 3,
        stepStrokeCurrentColor: 'green',
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: 'green',
        stepStrokeUnFinishedColor: '#aaaaaa',
        separatorFinishedColor: 'green',
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: 'green',
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
        <View
            style={{
                paddingTop: 20,
                backgroundColor: 'white',
                paddingBottom: 10,
            }}
        >
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

export default Step
