import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import StepIndicator from 'react-native-step-indicator'
import { generatePunches } from '../helpers/logic'

const Step = props => {
    const { punchCard } = props
    const [currentPosition, setCurrentPosition] = useState(2)
    const [labels, setLabels] = useState([])
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

    useEffect(() => {
        const requiredPunches = punchCard.punchCard?.requiredPunches

        if (requiredPunches !== undefined) {
            if (requiredPunches) {
                setLabels(generatePunches(requiredPunches))
                setCurrentPosition(punchCard.punches)
            }
        }
    }, [punchCard.punchCard?.requiredPunches])

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
