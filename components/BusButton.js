import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { h, w } from './constants'

const BusButton = ({data, onPress}) => {
    console.log(data)
    return(
        <TouchableOpacity styles={styles.box} onPress={onPress}>
            <View style={styles.box}>
                
                <Text style={styles.title}>{data.num}</Text>
                <Text style={styles.count}>{data.A} / {data.B}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    title: {
        width: w * 0.13,
        color: '#008891',
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        opacity: 0.8
    },

    count: {
        color: '#008891',
        opacity: 0.8,
        fontSize: 10
    }, 

      box: {
          backgroundColor: '#e7e7de',
          borderRadius: 15,
          height: w * 0.14,
          width: w * 0.14,
          position: 'relative',
          flexDirection: 'column',
          alignItems: 'center',
          margin: 3,
          borderWidth: 3,
          borderColor: '#e7e7de'
        },
})

export default BusButton