
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native';


import { SafeAreaView } from 'react-native-safe-area-context';
import {useFonts} from 'expo-font';
import MainNavigator from './Navigation';
import { Provider } from 'react-redux';
import store from './Store';



export default function App(){
    const [loaded] = useFonts({
       OpenSans:require( './assets/Open_Sans/static/OpenSans/OpenSans-Regular.ttf'),
      });
      
      if (!loaded) {
        return <ActivityIndicator/>;
      }
  
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <Provider store={store}>
          <MainNavigator/>
          </Provider>
        </SafeAreaView>
      )
}
