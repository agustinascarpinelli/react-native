
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native';
import ProductScreen from './Screens/ProductScreen';
import CategoriesScreen from './Screens/CategoriesScreen';
import { useState } from 'react';




export default function App(){

  const[categorySelected,setCategorySelected]=useState(null)
  const handleCategory=(category)=>{
    
          setCategorySelected(category)
      }
  
  

  
  return (
      <View style={styles.container}>
      {categorySelected ?
      <ProductScreen category={categorySelected} handleCategory={handleCategory}/>
  :
  
   <CategoriesScreen handleCategory={handleCategory}/>}
      </View>
  )}
  const styles=StyleSheet.create({
      container:{
          flex:1,
          flexDirection:'column',
          alignItems:'center',
      }
  })
