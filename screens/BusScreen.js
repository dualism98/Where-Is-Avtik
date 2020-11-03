import React from 'react'
import { Text, View, StyleSheet, ScrollView, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { h, w } from '../components/constants'

export default class BusScreen extends React.Component {
    state = {
        bus: this.props.route.params.item,
        A: [],
        B: [],
        choose: 'A'
    }

    async getTimetable(){
        try{
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
        this.getTimetable()
        return(
            <View style={{ backgroundColor: 'white', flex: 1}}>
                <ScrollView >
            
                    <View style={{ flexDirection: 'row', marginBottom: 20, alignSelf: 'center', marginTop: 20}}>
                        <TouchableWithoutFeedback onPress={() => this.setState({ choose: 'A'})}>
                            <Text style={{ borderWidth: 1, borderColor: 'black', fontSize: 20, padding: 7, width: 80, height: 40, textAlign: 'center', borderTopLeftRadius: 15, borderBottomLeftRadius: 15, borderRightWidth: 0}}>A</Text>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this.setState({ choose: 'B'})}>
                            <Text style={{ borderWidth: 1, borderColor: 'black', fontSize: 20, padding: 7, width: 80, height: 40, textAlign: 'center', borderTopRightRadius: 15, borderBottomRightRadius: 15}}>B</Text>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={{ flexDirection: 'column', paddingLeft: 20, flex: 1}}>
                        {this.state.choose === 'A' ?
                            this.state.A.map(item => {
                                if(item['st_title'] !== undefined){
                                    return(<View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 15, padding: 5, width: w - 40, marginBottom: 2}}><Text>{item['st_title']}</Text>
                                        {item['st_arrive'] !== ' ' ? <Text style={{ color: 'gray'}}>Время прибытия: {item['st_arrive']}</Text> : null}</View>)
                                }
                                else{
                                    return(<View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 15, padding: 5, width: w - 40, marginBottom: 2}}><MaterialCommunityIcons name="bus-side" size={30} color="black" style={{ marginLeft: 10}}/>
                                    <Text style={{ color: 'gray'}}>Расстояние: {item['ts_coment']}</Text>
                                    </View>)
                                }
                                
                                }) : 
                                this.state.B.map(item => {
                                if(item['st_title'] !== undefined){
                                    return(<View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 15, padding: 5, width: w - 40, marginBottom: 2}}><Text>{item['st_title']}</Text>
                                        {item['st_arrive'] !== ' ' ? <Text style={{ color: 'gray'}}>Время прибытия: {item['st_arrive']}</Text> : null}</View>)
                                }
                                else{
                                    return(<View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 15, padding: 5, width: w - 40, marginBottom: 2}}><MaterialCommunityIcons name="bus-side" size={30} color="black" style={{ marginLeft: 10}}/>
                                    <Text style={{ color: 'gray'}}>Расстояние: {item['ts_coment']}</Text>
                                    </View>)
                                }
                            
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }
}