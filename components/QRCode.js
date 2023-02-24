import { View } from 'native-base'
import QRCode from 'react-native-qrcode-svg'

const QRCodeGenerator = () => {
    return (
        <>
            <View marginTop={'50px'}>
                <QRCode
                    size={300}
                    value="23333f20-3fb8-4706-b70b-fbafdcaa6748"
                />
            </View>
        </>
    )
}

export default QRCodeGenerator
