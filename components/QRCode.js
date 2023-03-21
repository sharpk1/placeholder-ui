import { View } from 'native-base'
import QRCode from 'react-native-qrcode-svg'

const QRCodeGenerator = () => {
    return (
        <>
            <View marginTop={'50px'}>
                <QRCode
                    size={300}
                    value={JSON.stringify({
                        phoneNumber: '8328141282',
                        storeId: 1,
                    })}
                />
            </View>
        </>
    )
}

export default QRCodeGenerator
