import { Fontisto, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import BusScreen from '../screens/BusScreen'
import TrolScreen from '../screens/TrolScreen'
import TramScreen from '../screens/TramScreen'
import TabTwoScreen from '../screens/TabTwoScreen'
import TabThreeScreen from '../screens/TabThreeScreen'

const BusStack = createStackNavigator()

function BusStackScreen(){
  return(
    <BusStack.Navigator>
      <BusStack.Screen name="Home" component={TabOneScreen} options={{headerShown: false}}/>
      <BusStack.Screen name="Buses" component={BusScreen} options={  ({ route }) => ({ title: 'Автобус ' + route.params.item.num }) }/>
    </BusStack.Navigator>
  )
}

const TrolStack = createStackNavigator()

function TrolStackScreen(){
  return(
    <TrolStack.Navigator>
      <TrolStack.Screen name="Home" component={TabTwoScreen} options={{headerShown: false}}/>
      <TrolStack.Screen name="Trols" component={TrolScreen} options={ ({ route }) => ({ title: 'Троллейбус ' + route.params.item.slice(0, route.params.item.length - 1) })}/>
    </TrolStack.Navigator>
  )
}

const TramStack = createStackNavigator()

function TramStackScreen(){
  return(
    <TrolStack.Navigator>
      <TrolStack.Screen name="Home" component={TabThreeScreen} options={{headerShown: false}}/>
      <TrolStack.Screen name="Trams" component={TramScreen} options={ ({ route }) => ({ title: 'Трамвай ' + route.params.item.slice(0, route.params.item.length - 2) })}/>
    </TrolStack.Navigator>
  )
}

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeBackgroundColor: '#00587a',
                       inactiveBackgroundColor: '#00587a',
                       activeTintColor: 'white',
                        inactiveTintColor: '#0f3057',
                    }}
                         screenOptions={({ route }) => ({
                          tabBarIcon: ({ focused, color, size }) => {
                            color = focused ? 'white' : '#0f3057'
                            const icons = {
                              'Автобус': <Fontisto name='bus' size={30} style={{ marginBottom: -3 }} color={color} />,
                              'Троллейбус': <FontAwesome5 name='bus-alt' size={30} style={{ marginBottom: -3}} color={color} />,
                              'Трамвай': <MaterialIcons name='tram' size={30} style={{ marginBottom: -3}} color={color} /> 
                            }
                            return icons[route.name];
                          },
                        })}>
      <BottomTab.Screen
        name="Автобус"
        component={BusStackScreen}
      />
      <BottomTab.Screen
        name="Троллейбус"
        component={TrolStackScreen}
      />
      <BottomTab.Screen
        name="Трамвай"
        component={TramStackScreen}
      />
    </BottomTab.Navigator>
  );
}
