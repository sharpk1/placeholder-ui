import React, { useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    Button,
    Alert,
    View,
} from 'react-native'

const LoginScreen = () => {
    const [text, setText] = useState('')
    const [number, setNumber] = useState('')

    const onChangeText = e => {
        setText(e)
    }

    const onChangeNumber = e => {
        setNumber(e)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="useless placeholder"
                    keyboardType="default"
                    secureTextEntry={true}
                />
                <Button
                    title="Sign In"
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
})

export default LoginScreen
