import { Avatar } from 'react-native-elements'

const AvatarImage = props => {
    const { image } = props
    return (
        <Avatar
            size={'xlarge'}
            rounded
            avatarStyle={{ borderColor: 'green', borderWidth: 1 }}
            source={{
                uri: image,
            }}
        />
    )
}

export default AvatarImage
