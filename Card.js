import React from 'react'
import {
    Box,
    Heading,
    AspectRatio,
    Image,
    Text,
    Center,
    HStack,
    Stack,
    NativeBaseProvider,
} from 'native-base'

const Example = props => {
    const { fileName } = props
    // console.log(fileName)
    // const path = `./assets/dispensary/${fileName}`

    // const newString = require(path)

    return (
        <Box alignItems="center">
            <Box
                marginBottom={'10px'}
                maxW="80"
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                _dark={{
                    borderColor: 'coolGray.600',
                    backgroundColor: 'gray.700',
                }}
                _web={{
                    shadow: 2,
                    borderWidth: 0,
                }}
                _light={{
                    backgroundColor: 'gray.50',
                }}
            >
                <Box>
                    <AspectRatio w="100%" ratio={16 / 9}>
                        <Image
                            source={{
                                uri: fileName,
                            }}
                            height={178}
                            width={350}
                            alt={'image'}
                        />
                    </AspectRatio>
                    <Center
                        bg="green.500"
                        _dark={{
                            bg: 'green.400',
                        }}
                        _text={{
                            color: 'warmGray.50',
                            fontWeight: '700',
                            fontSize: 'xs',
                        }}
                        position="absolute"
                        bottom="0"
                        px="3"
                        py="1.5"
                    >
                        PHOTOS
                    </Center>
                </Box>
                <Stack p="4" space={3}>
                    <Stack space={2}>
                        <Heading size="md" ml="-1">
                            Star Buds
                        </Heading>
                        <Text
                            fontSize="xs"
                            _light={{
                                color: 'violet.500',
                            }}
                            _dark={{
                                color: 'violet.400',
                            }}
                            fontWeight="500"
                            ml="-0.5"
                            mt="-1"
                        >
                            4 miles away
                        </Text>
                    </Stack>
                    <Text fontWeight="400">
                        We are your top-rated cannabis store, located at 4690
                        Brighton Blvd, just a quarter of a mile off of I-70 and
                        west of the Denver Coliseum.
                    </Text>
                    <HStack
                        alignItems="center"
                        space={4}
                        justifyContent="space-between"
                    >
                        <HStack alignItems="center">
                            <Text
                                color="coolGray.600"
                                _dark={{
                                    color: 'warmGray.200',
                                }}
                                fontWeight="400"
                            >
                                6 mins ago
                            </Text>
                        </HStack>
                    </HStack>
                </Stack>
            </Box>
        </Box>
    )
}

export default Example

// export default () => {
//     return (
//       <NativeBaseProvider>
//         <Center flex={1} px="3">
//             <Example />
//         </Center>
//       </NativeBaseProvider>
//     );
// };
