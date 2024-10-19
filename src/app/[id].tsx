import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const productDetails = () => {
    const { id } = useLocalSearchParams()
    return (
        <View>
            <Text style={{ marginVertical: 30, fontSize: 20 }}>productDetails for id : {id}</Text>
        </View>
    )
}

export default productDetails