import React from 'react'
import { View } from 'react-native'
import PaginationDot from 'react-native-animated-pagination-dot'

const ExampleDotPaginate = props => {
    const { pages, currentIndex } = props

    return (
        <View style={{ alignSelf: 'center', marginTop: 10 }}>
            <PaginationDot
                activeDotColor={'green'}
                curPage={currentIndex}
                maxPage={pages}
                inactiveDotColor={'gray'}
            />
        </View>
    )
}

export default ExampleDotPaginate
