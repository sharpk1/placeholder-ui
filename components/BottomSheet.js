import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {
    Button,
    Actionsheet,
    useDisclose,
    Center,
    NativeBaseProvider,
} from 'native-base'
import QRCodeGenerator from './QRCode'

const BottomSheet = () => {
    const { isOpen, onOpen, onClose } = useDisclose()
    return (
        <>
            {/* <Button onPress={onOpen}>Show QR Code</Button> */}

            <Actionsheet
                isOpen={isOpen}
                onClose={onClose}
                _backdrop={false}
                useRNModal={true}
                disableOverlay={false}
            >
                <Actionsheet.Content height={'lg'}>
                    {/* <Actionsheet.Item>Option 1</Actionsheet.Item>
                    <Actionsheet.Item>Option 2</Actionsheet.Item>
                    <Actionsheet.Item>Option 3</Actionsheet.Item> */}
                    <QRCodeGenerator />
                    <Text
                        style={{
                            marginTop: 50,
                            textAlign: 'center',
                        }}
                    >
                        Show this QR code to your budtender to confirm visit to
                        dispensary.
                    </Text>
                </Actionsheet.Content>
            </Actionsheet>
        </>
    )
}

const styles = StyleSheet.create({
    action: {
        margin: 100,
        // width: '100%',
        height: '100%',
        // alignItems: 'stretch',
        // justifyContent: 'flex-start',
    },
})

export default () => {
    return (
        <NativeBaseProvider>
            <Center px="3">
                <BottomSheet />
            </Center>
        </NativeBaseProvider>
    )
}
