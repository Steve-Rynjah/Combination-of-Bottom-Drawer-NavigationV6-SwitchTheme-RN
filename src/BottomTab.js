import  React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons';

export const HomeScreen = () => {
  const {colors} = useTheme();
  const theme = useTheme();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar barStyle={theme.dark ? "light-content" : "light-content"}/>
      <Text style={{fontSize: 20, color: colors.text}}>Home!</Text>
    </View>
  );
}

export const SettingsScreen = () => {
  const {colors} = useTheme();
  const theme = useTheme()
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar barStyle={theme.dark ? "light-content" : "default"}/>
      <Text style={{fontSize: 20, color: colors.text}}>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{headerShown: false, tabBarLabel: 'HOME',
            tabBarIcon: ({color}) => (<MaterialIcons name="home" size={24} color={color}/>)}}/>
        <Tab.Screen 
            name="Setting" 
            component={SettingsScreen} 
            options={{headerShown: false, tabBarLabel: 'SETTING',
            tabBarIcon: ({color}) => (<MaterialIcons name="settings" size={24} color={color}/>)}}/>
      </Tab.Navigator>
  );
}