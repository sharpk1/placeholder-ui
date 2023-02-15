import { ListItem, Avatar } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale' // https://github.com/kohver/react-native-touchable-scale
import { LinearGradient } from 'expo-linear-gradient' // Only if no expo
import { View } from 'native-base'

const LineItems = () => {
    return (
        <ListItem
            style={{ width: '50%', borderRadius: 10, overflow: 'hidden' }}
            Component={TouchableScale}
            friction={90} //
            tension={100} // These props are passed to the parent component (here TouchableScale)
            activeScale={0.95} //
            linearGradientProps={{
                colors: ['green', 'gray'],
                start: { x: 1, y: 0 },
                end: { x: 0.2, y: 0 },
            }}
            ViewComponent={LinearGradient} // Only if no expo
        >
            <Avatar
                rounded
                source={{
                    uri: 'https://variety.com/wp-content/uploads/2022/11/Screen-Shot-2022-11-02-at-8.33.52-AM.png',
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}>
                    Chris Jackson
                </ListItem.Title>
                <ListItem.Subtitle style={{ color: 'white' }}>
                    Vice Chairman
                </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron color="white" />
        </ListItem>
    )
}

export default LineItems
