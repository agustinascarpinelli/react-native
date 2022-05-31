import { colors } from "../Styles/colors";
import { StyleSheet, View,TextInput,TouchableOpacity,KeyboardAvoidingView,Dimensions, TouchableWithoutFeedback,Platform, Keyboard,useWindowDimensions} from "react-native";
import Searcher from "../Components/Searcher";
import Header from "../Components/Header";
import { CATEGORIES } from "../Data/categories";
import List from "../Components/List/Index";
import React, { useState,useEffect } from "react";
import { Entypo } from '@expo/vector-icons'; 



const CategoriesScreen=({navigation})=>{
const[input, setInput]=useState("")
const handleErase=()=>{setInput("")}
const [categoriesFiltered,setCategoriesFiltered]=useState(CATEGORIES)
const {width,height}=useWindowDimensions()
const [orientation,setOrientation]=useState("portrait")


useEffect (()=>{
        if (input ==="") setCategoriesFiltered(CATEGORIES)
        else {const categoryFiltered=CATEGORIES.filter(category=>category.category.toLowerCase().includes(input.toLowerCase()))
        setCategoriesFiltered(categoryFiltered)}
    }, [input])


useEffect (()=>{
    setOrientation(height>width ? "portrait" : "landscape" )
},[height,width])

const handleSelectedCategory=(category)=>{
 navigation.push ("Products",{
     categoryID:category.id,
     categoryTitle:category.category,
 })
}


return (
    <KeyboardAvoidingView
    behavior={Platform.OS==='ios' ? "padding" :  "height"}
    style={styles.keyboardAvoid}
    keyboardVerticalOffset={10}>
   <Header></Header>
   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={orientation==="portrait" ? styles.containerVertical : styles.containerHorizontal}>
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
     <View style={orientation==="portrait" ? styles.listContainerVertical : styles.listContainerHorizontal}>
         <List data={categoriesFiltered} onPress={handleSelectedCategory}/>
      </View>
      </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
)}
export default CategoriesScreen

const styles=StyleSheet.create({
    keyboardAvoid: {
        flex: 1,
    },
    containerVertical:{
        flex:1,
        width:'100%',
        alignItems:'center',
        flexDirection:'column',

    },
    containerHorizontal:{
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
    listContainerHorizontal:{
        flex:1,
        flexDirection:'column'

    
    },
})