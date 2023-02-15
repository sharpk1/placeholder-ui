import { Avatar } from 'react-native-elements'

const AvatarImage = () => {
    return (
        <Avatar
            size="xlarge"
            rounded
            source={{
                uri: 'https://images.weedmaps.com/pictures/listings/972/068/143/423733479_dc7c2893-fbdb-41a0-b050-4001ab17c34f.jpg?w=400&h=400&dpr=2&auto=format&fit=crop',
            }}
        />
    )
}

export default AvatarImage
