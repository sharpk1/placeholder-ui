import { View } from 'react-native'
import React from 'react'
import { Card, ListItem } from 'react-native-elements'

const Deal = () => {
    const users = [
        {
            name: 'brynn',
            avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
        },
    ]
    return (
        <View>
            <Card containerStyle={{ padding: 0 }}>
                {users.map((u, i) => {
                    return (
                        <ListItem
                            key={i}
                            roundAvatar
                            title={u.name}
                            leftAvatar={{ source: { uri: u.avatar } }}
                        />
                    )
                })}
            </Card>
        </View>
    )
}

export default Deal
