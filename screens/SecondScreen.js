import { StyleSheet, Text, View } from 'react-native'
import * as Progress from 'react-native-progress'
import { MilestoneProgressBar } from 'milestone-progress-bar'

export default function SecondScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* <Progress.Circle
                progress={0.25}
                size={100}
                indeterminate={false}
                showsText={true}
            />
            <Progress.CircleSnail color={['red', 'green', 'blue']} /> */}
            <MilestoneProgressBar
                totalMilestones={3}
                progress={[
                    { completed: 4, total: 4 },
                    { completed: 0, total: 2 },
                    { completed: 0, total: 2 },
                ]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 0,
    },
})
