import { colors } from "../Styles/colors";
import { StyleSheet, View,TextInput,TouchableOpacity,Button} from "react-native";
import Searcher from "../Components/Searcher";
import Header from "../Components/Header";
import { CATEGORIES } from "../Data/categories";
import List from "../Components/List/Index";
import React, { useState,useEffect } from "react";
import { Entypo } from '@expo/vector-icons'; 
import MainNavigation from "../Navigation";

const CategoriesScreen=({navigation})=>{
const[input, setInput]=useState("")
const handleErase=()=>{setInput("")}
const [categoriesFiltered,setCategoriesFiltered]=useState(CATEGORIES)

useEffect (()=>{
        if (input ==="") setCategoriesFiltered(CATEGORIES)
        else {const categoryFiltered=CATEGORIES.filter(category=>category.category.toLowerCase().includes(input.toLowerCase()))
        setCategoriesFiltered(categoryFiltered)}
    }, [input])


const handleSelectedCategory=(category)=>{
 navigation.push ("Products")
}


return (
    <>
   <Header></Header>
    <View style={styles.container}>
    <Searcher >
    <TextInput
               value= {input}
               onChangeText={setInput}
               keyboardType="default"
               style={styles.input}
               placeholder="Search a product"
     />    
     <TouchableOpacity onPress={handleErase}>
     <Entypo name="erase" size={30} />
     </TouchableOpacity>
     </Searcher>
     <View style={styles.listContainer}>
         <List data={categoriesFiltered} onPress={handleSelectedCategory}/>
      </View>
      </View>

    </>
)}
export default CategoriesScreen

const styles=StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        flexDirection:'column',

    },
    input:{
        width:'80%',
        padding:10,
        margin:10,
        backgroundColor:colors.blue,
        borderRadius:10,
        color:'white',
        height:50,
    },
    listContainer:{
        flex:1,
    }
})