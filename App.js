
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native';
import ProductScreen from './Screens/ProductScreen';
import CategoriesScreen from './Screens/CategoriesScreen';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainNavigation from './Navigation';



export default function App(){

  
      return (
        <SafeAreaView style={{ flex: 1 }}>
          < MainNavigation/>
        </SafeAreaView>
      )
}
