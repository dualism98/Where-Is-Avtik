import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { h, w } from './constants'
import { LinearGradient } from 'expo-linear-gradient'

const BusButton = ({data, onPress}) => {
    console.log(data)
    return(
        <TouchableOpacity styles={styles.box} onPress={onPress}>
            <View style={[styles.box, styles.shadow2]}>
                <LinearGradient 
                    colors={['transparent', 'rgb(254, 218, 111)']}
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      top: 0,
                      height: w * 0.13,
                      borderRadius: 15,
                    }}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                />
                <Text style={styles.title}>{data.num}</Text>
                <Text style={styles.count}>{data.A} / {data.B}</Text>
            </View>
        </TouchableOpacity>
    )
}

function elevationShadowStyle(elevation) {
    return {
      elevation,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 0.5 * elevation },
      shadowOpacity: 0.3,
      shadowRadius: 0.8 * elevation
    };
  }

const styles = StyleSheet.create({
    title: {
        width: w * 0.13,
        color: 'gray',
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        opacity: 0.8
    },

    count: {
        color: 'gray',
        opacity: 0.8,
        fontSize: 10
    }, 

    shadow2: elevationShadowStyle(5),
      box: {
          backgroundColor: 'white',
          borderRadius: 15,
          height: w * 0.13,
          width: w * 0.13,
          position: 'relative',
          flexDirection: 'column',
          alignItems: 'center',
          margin: 3,
        },
})

export default BusButton