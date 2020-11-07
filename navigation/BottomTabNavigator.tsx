import { Fontisto, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import BusScreen from '../screens/BusScreen'
import TrolScreen from '../screens/TrolScreen'
import TramScreen from '../screens/TramScreen'
import TabTwoScreen from '../screens/TabTwoScreen'
import TabThreeScreen from '../screens/TabThreeScreen'
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList } from '../types';

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

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint,
                        activeBackgroundColor: 'rgba(251, 248, 208, 0.8)',
                        inactiveBackgroundColor: 'rgba(251, 248, 208, 0.8)' }}>
      <BottomTab.Screen
        name="Автобус"
        component={BusStackScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="bus" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Троллейбус"
        component={TrolStackScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarTrolley name="bus-alt" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Трамвай"
        component={TramStackScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarTram name="tram" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Fontisto size={30} style={{ marginBottom: -3 }} {...props} />;
}

function TabBarTram(props: { name: string; color: string }) {
  return <MaterialIcons size={30} style={{ marginBottom: -3}} {...props} />
}

function TabBarTrolley(props: { name: string; color: string }) {
  return <FontAwesome5 size={30} style={{ marginBottom: -3}} {...props} />
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerShown: false }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerShown: false }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabTwoStack.Screen
        name="TabThreeScreen"
        component={TabThreeScreen}
        options={{ headerShown: false }}
      />
    </TabThreeStack.Navigator>
  );
}