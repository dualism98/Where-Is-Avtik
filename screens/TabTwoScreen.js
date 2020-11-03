import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, StatusBar, TouchableWithoutFeedback } from 'react-native';
import BusButton from '../components/BusButton'
import { h, w } from '../components/constants'

export default class TabTwoScreen extends React.Component {
  state = {
    busList: [],
    bus: '',
    A: [],
    B: [],
  }

  async componentDidMount(){
    try{
      const busesApiCall = await fetch('https://mu-kgt.ru/informing/wap/marsh/?action=getListCountTransport', {method: 'GET'})
      const buses = await busesApiCall.json()

      console.log(buses)
      var list = []
      for (const property in buses[2]){
        list.push(property)
      }

      this.setState({ busList: list})
    }
    catch(err){
      console.warn('Не удается загрузить список автобусов')
    }
  }

  async getTimetable(){
    try{
      console.log("Update")
      const timetableApiCall = await fetch('https://mu-kgt.ru/informing/wap/marsh/?m=' + this.state.bus + '&action=getMarshData')
      const timetable = await timetableApiCall.json();
      var list = []
      for (const property in timetable.ts_line){
        list.push(timetable.ts_line[property])
      }

      var A = []
      var a = []
      var b = []
      for(const property in list[0]){
        A.push(list[0][property])
      }

      for(const property in A){
        a.push(A[property])   
      }

      A = []
      for(const property in list[1]){
        A.push(list[1][property])
      }

      for(const property in A){
        b.push(A[property])   
      }

      this.setState({ A: a, B: b})
    }
    catch(err){
      console.warn('Не удалось загрузить расписание автобуса')
    }
  }


  render(){
    const { navigate } = this.props.navigation
    return (
      <View style={{ backgroundColor: 'white'}}>
      <StatusBar barStyle={'dark-content'}/>
        <View style={styles.container}>
          
        {this.state.busList.map(item => {
          return(<BusButton data={item} onPress={() => navigate('Trols', {item})}/>)
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