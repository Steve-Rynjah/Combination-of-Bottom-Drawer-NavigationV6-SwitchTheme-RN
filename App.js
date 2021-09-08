import React, {useState, useMemo} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { 
  NavigationContainer, 
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme 
} from '@react-navigation/native';

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme, 
  DarkTheme as PaperDarkTheme
} from 'react-native-paper'

import {MainContext} from './src/Context/ContextProvider'

import {BottomTab} from './src/BottomTab'
import {NavDrawer} from './src/NavDrawer'

const Drawer = createDrawerNavigator();

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#f5f5f5',
      text: '#333333'
    }
  }

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#f5f5f5'
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const memoContext = useMemo(()=>({
    toggleTheme: ()=>{
      setIsDarkTheme(isDarkTheme => !isDarkTheme)
    }
  }),[])

  return (
    <PaperProvider theme={theme}>
      <MainContext.Provider value={memoContext}>
        <NavigationContainer theme={theme}>
          <Drawer.Navigator drawerContent={props => <NavDrawer {...props}/>} screenOptions={{headerShown: false}}>
            <Drawer.Screen name="Main" component={BottomTab}/>
          </Drawer.Navigator>
        </NavigationContainer>
      </MainContext.Provider>
    </PaperProvider>
  );
}


