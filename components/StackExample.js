//@ts-nocheck
import React from 'react'
import { View } from 'react-native'
import {
    Stack,
    Center,
    Heading,
    ScrollView,
    VStack,
    Divider,
    NativeBaseProvider,
} from 'native-base'

const StackExample = () => {
    return (
        <ScrollView>
            <VStack space="2.5" mt="4" px="8">
                <Heading size="md">row</Heading>
                <Stack direction="row" mb="2.5" mt="1.5" space={1}>
                    <Stack mb="2.5" direction="column" space={1}>
                        {/* <Center
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
                        </Center> */}
                        <View style={{ opacity: 0 }}>
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
                        </View>

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
                    <Stack mb="2.5" direction="column" space={1}>
                        <Center
                            minWidth={'64'}
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
                            minWidth={'64'}
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
                            minWidth={'64'}
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
                    </Center> */}
                </Stack>
                <Divider />
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
                <Divider />
            </VStack>
        </ScrollView>
    )
}

export default () => {
    return (
        <NativeBaseProvider>
            <Center flex={1} px="3">
                <StackExample />
            </Center>
        </NativeBaseProvider>
    )
}
