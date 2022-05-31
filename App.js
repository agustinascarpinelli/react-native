
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native';
import ProductScreen from './Screens/ProductScreen';
import CategoriesScreen from './Screens/CategoriesScreen';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useFonts} from 'expo-font';
import MainNavigator from './Navigation';



export default function App(){
    const [loaded] = useFonts({
       OpenSans:require( './assets/Open_Sans/static/OpenSans/OpenSans-Regular.ttf'),
      });
      
      if (!loaded) {
        return <ActivityIndicator/>;
      }
  
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <MainNavigator/>
        </SafeAreaView>
      )
}
