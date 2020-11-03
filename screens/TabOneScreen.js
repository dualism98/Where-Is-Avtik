import React from 'react';
import { Text, View, StyleSheet, ScrollView, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import BusButton from '../components/BusButton'
import { h, w } from '../components/constants'

export default class TabOneScreen extends React.Component {
  state = {
    busList: [],
    bus: '',
  }

  async componentDidMount(){
    try{
      const busesApiCall = await fetch('https://mu-kgt.ru/informing/wap/marsh/?action=getListCountTransport', {method: 'GET'})
      const buses = await busesApiCall.json()

      var list = []
      for (const property in buses[1]){
        list.push(property)
      }

      this.setState({ busList: list})
    }
    catch(err){
      console.warn('Не удается загрузить список автобусов')
    }
  }


  render(){
    const { navigate } = this.props.navigation
    return (
      <View style={{ backgroundColor: 'white'}}>
        <StatusBar barStyle={'dark-content'}/>
        <View style={styles.container}>
          
          {this.state.busList.map(item => {
            return(<BusButton data={item} onPress={() => navigate('Buses', {item})}/>)
          })}
          
        </View>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    minHeight: h,
    paddingTop: StatusBar.currentHeight,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },
});
