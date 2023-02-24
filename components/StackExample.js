//@ts-nocheck
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {
    Stack,
    Center,
    Heading,
    ScrollView,
    VStack,
    Divider,
    NativeBaseProvider,
    Badge,
    HStack,
} from 'native-base'
import AvatarImage from './Avatar'

const StackExample = props => {
    const { image } = props

    return (
        // <ScrollView>
        <VStack space="2.5" mt="4" px="8">
            <Stack
                direction="row"
                mb="2.5"
                mt="1.5"
                space={1}
                flexDirection={'row'}
                justifyContent={'space-between'}
                display={'flex'}
            >
                <View>
                    <Stack
                        mb="2.5"
                        direction="column"
                        space={1}
                        display={'flex'}
                    >
                        <View
                            style={{
                                opacity: 1,
                                marginRight: 10,
                                marginTop: 10,
                            }}
                        >
                            {/* <Center
                                bg="primary.500"
                                size="16"
                                rounded="sm"
                                _text={{
                                    color: 'warmGray.50',
                                    fontWeight: 'medium',
                                }}
                                shadow={'3'}
                            >
                                Box 2
                            </Center> */}
                            <AvatarImage image={image} />
                        </View>

                        <View>
                            {/* <Center
                                size="16"
                                bg="primary.700"
                                rounded="sm"
                                _text={{
                                    color: 'warmGray.50',
                                    fontWeight: 'medium',
                                }}
                                shadow={'3'}
                            >
                                
                                Box 3
                            </Center> */}
                        </View>
                    </Stack>
                </View>
                <View>
                    <Stack mb="2.5" direction="column" space={1}>
                        <Center
                            minWidth={'48'}
                            size="16"
                            // bg="primary.400"
                            rounded="sm"
                            _text={{
                                color: 'warmGray.50',
                                // fontWeight: 'medium',
                            }}
                            // shadow={'3'}
                        >
                            <View style={{ display: 'flex' }}>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        fontWeight: 'normal',
                                        alignSelf: 'flex-end',
                                    }}
                                >
                                    Cherry Slimeade - 3.5 grams
                                </Text>
                                <View
                                    style={{
                                        justifyContent: 'center',
                                        marginTop: 5,
                                    }}
                                >
                                    <Badge colorScheme="info">Hybrid</Badge>
                                </View>
                            </View>
                        </Center>
                        <Center
                            minWidth={'48'}
                            // bg="primary.500"
                            size="8"
                            rounded="sm"
                            _text={{
                                color: 'warmGray.50',
                                fontWeight: 'normal',
                            }}
                            // shadow={'3'}
                        >
                            {/* <HStack
                                space={{
                                    base: 2,
                                    sm: 4,
                                }}
                                mx={{
                                    base: 'auto',
                                    md: 0,
                                }}
                            >
                                <Badge colorScheme="info">Focused</Badge>
                                <Badge colorScheme="info">Tingly</Badge>
                                <Badge colorScheme="info">Energetic</Badge>
                            </HStack> */}
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}
                            >
                                <Text
                                    style={{
                                        // marginTop: 5,
                                        textDecorationLine: 'line-through',
                                        fontSize: 25,
                                        fontWeight: '100',
                                    }}
                                >
                                    $20{' '}
                                </Text>
                                <Text
                                    style={{
                                        // marginTop: 5,
                                        fontSize: 25,
                                        color: 'green',
                                    }}
                                >
                                    $10{' '}
                                    <View>
                                        <Badge colorScheme="emerald">
                                            50% off
                                        </Badge>
                                    </View>
                                </Text>
                            </View>
                        </Center>
                        <TouchableOpacity
                            onPress={() => {
                                console.log('hey!')
                            }}
                        >
                            <Center
                                // marginRight={5}
                                minWidth={'40'}
                                size="16"
                                bg="#44e36f"
                                rounded="sm"
                                _text={{
                                    // color: 'warmGray.50',
                                    fontWeight: 'medium',
                                }}
                                shadow={'3'}
                                alignSelf={'center'}
                            >
                                <Text>Claim Deal</Text>
                            </Center>
                        </TouchableOpacity>
                    </Stack>
                </View>
            </Stack>
            {/* <Divider />
                <Heading size="md">column</Heading>
                <Stack mb="2.5" mt="1.5" direction="column" space={3}>
                    <Center
                        size="16"
                        bg="primary.400"
                        rounded="sm"
                        _text={{
                            color: 'warmGray.50',
                            fontWeight: 'medium',
                        }}
                        shadow={'3'}
                    >
                        Box 1
                    </Center>
                    <Center
                        bg="primary.500"
                        size="16"
                        rounded="sm"
                        _text={{
                            color: 'warmGray.50',
                            fontWeight: 'medium',
                        }}
                        shadow={'3'}
                    >
                        Box 2
                    </Center>
                    <Center
                        size="16"
                        bg="primary.700"
                        rounded="sm"
                        _text={{
                            color: 'warmGray.50',
                            fontWeight: 'medium',
                        }}
                        shadow={'3'}
                    >
                        Box 3
                    </Center>
                </Stack>
                <Divider />
                <Heading size="md">row-reverse</Heading>
                <Stack mb="2.5" mt="1.5" direction="row" reversed space={3}>
                    <Center
                        size="16"
                        bg="primary.400"
                        rounded="sm"
                        _text={{
                            color: 'warmGray.50',
                            fontWeight: 'medium',
                        }}
                        shadow={'3'}
                    >
                        Box 1
                    </Center>
                    <Center
                        bg="primary.500"
                        size="16"
                        rounded="sm"
                        _text={{
                            color: 'warmGray.50',
                            fontWeight: 'medium',
                        }}
                        shadow={'3'}
                    >
                        Box 2
                    </Center>
                    <Center
                        size="16"
                        bg="primary.700"
                        rounded="sm"
                        _text={{
                            color: 'warmGray.50',
                            fontWeight: 'medium',
                        }}
                        shadow={'3'}
                    >
                        Box 3
                    </Center>
                </Stack>
                <Divider />
                <Heading size="md">column-reverse</Heading>
                <Stack mb="2.5" mt="1.5" direction="column-reverse" space={3}>
                    <Center
                        size="16"
                        bg="primary.400"
                        rounded="sm"
                        _text={{
                            color: 'warmGray.50',
                            fontWeight: 'medium',
                        }}
                        shadow={'3'}
                    >
                        Box 1
                    </Center>
                    <Center
                        bg="primary.500"
                        size="16"
                        rounded="sm"
                        _text={{
                            color: 'warmGray.50',
                            fontWeight: 'medium',
                        }}
                        shadow={'3'}
                    >
                        Box 2
                    </Center>
                    <Center
                        size="16"
                        bg="primary.700"
                        rounded="sm"
                        _text={{
                            color: 'warmGray.50',
                            fontWeight: 'medium',
                        }}
                        shadow={'3'}
                    >
                        Box 3
                    </Center>
                </Stack>
                <Divider /> */}
        </VStack>

        // </ScrollView>
    )
}

export default props => {
    const { image } = props

    return (
        <NativeBaseProvider>
            <Center flex={1} px="3">
                <StackExample image={image} />
            </Center>
        </NativeBaseProvider>
    )
}
