import { View } from 'native-base'
import QRCode from 'react-native-qrcode-svg'

const QRCodeGenerator = () => {
    return (
        <>
            <View marginTop={'50px'}>
                <QRCode
                    size={300}
                    value={JSON.stringify({
                        phone_number: '1',
                        dispensary_id: '61f2f5b6c5e63a60e7ce8e00',
                    })}
                />
            </View>
        </>
    )
}

export default QRCodeGenerator
