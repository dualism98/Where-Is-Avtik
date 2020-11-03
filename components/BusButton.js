import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { h, w } from './constants'

const BusButton = ({data, onPress}) => {
    return(
        <TouchableHighlight style={styles.container} onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.title}>{data}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        width: w * 0.13,
        height: w * 0.13,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        margin: 3,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default BusButton