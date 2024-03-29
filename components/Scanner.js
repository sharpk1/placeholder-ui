import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import {
    Spinner,
    HStack,
    Heading,
    Center,
    NativeBaseProvider,
} from 'native-base'
import * as Progress from 'react-native-progress'
import axios from 'axios'

const Scanner = () => {
    const [hasPermissions, setHasPermissions] = useState(false)
    const [scanData, setScanData] = useState()

    useEffect(() => {
        ;(async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync()
            setHasPermissions(status === 'granted')
        })()
    }, [])

    if (!hasPermissions) {
        return (
            <View style={styles.container}>
                <Text>Please grant camera permissions to app.</Text>
            </View>
        )
    }

    const handleBarCodeScanned = async ({ data, type }) => {
        setScanData(data)
        const parsedData = JSON.parse(data)
        console.log(`Data: ${data}`)
        console.log(`Type: ${type}`)

        const body = {
            phoneNumber: parsedData.phoneNumber,
            storeId: parsedData.storeId,
        }

        await axios
            .post('http://192.168.1.14:8000/users/incrementPunch', body)
            .then(response => {
                console.log('Response:', response.data)
            })
            .catch(error => {
                console.error('Error:', error.response.data)
            })
    }

    return (
        <>
            <View style={{ flex: 1 }}>
                <BarCodeScanner
                    style={StyleSheet.absoluteFillObject}
                    onBarCodeScanned={
                        scanData ? undefined : handleBarCodeScanned
                    }
                />
                {scanData ? (
                    <View style={styles.cameraOverlay}>
                        <Button
                            color={'#44e36f'}
                            title="QR Code scanned! Press here to scan again."
                            onPress={() => setScanData(undefined)}
                        />
                    </View>
                ) : (
                    <View style={styles.cameraOverlay}>
                        <Progress.CircleSnail
                            size={52}
                            progress={0.5}
                            color="#44e36f"
                            thickness={2}
                            borderWidth={0}
                            unfilledColor={'rgba(255,255,255, 0.15)'}
                        />
                        <Text style={{ color: '#44e36f', fontSize: 16 }}>
                            Please scan QR Code
                        </Text>
                    </View>
                )}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cameraOverlay: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Scanner
