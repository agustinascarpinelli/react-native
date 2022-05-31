import { colors } from "../Styles/colors"
import { StyleSheet, useWindowDimensions, View,TextInput,TouchableOpacity,Button, KeyboardAvoidingView, TouchableWithoutFeedback,Platform,Keyboard} from "react-native"
import Searcher from "../Components/Searcher"
import Header from "../Components/Header"
import { PRODUCTS } from "../Data/product"
import React,{ useEffect,useState } from "react"
import List from "../Components/List/Index"
import { Entypo } from '@expo/vector-icons'; 


const ProductScreen=({route, navigation})=>{
const[input, setInput]=useState("")
const handleErase=()=>{setInput("")}
const [productsFiltered,setProductsFiltered]=useState([])
const [initialProducts, setInitialProducts]=useState([])
const {width,height}=useWindowDimensions()
const [orientation,setOrientation]=useState("portrait")
const {categoryID,categoryTitle}=route.params

useEffect (()=>{
    if (initialProducts.length!==0){
        if (input ==="") setProductsFiltered(initialProducts)
        else {const productfiltered=initialProducts.filter(product=>product.description.toLowerCase().includes(input.toLowerCase()))
        setProductsFiltered(productfiltered)}
    }}, [input,initialProducts])

useEffect (()=>{
    const initialProduct=PRODUCTS.filter(product=>product.category===categoryID)
    setInitialProducts(initialProduct)
},[categoryID])  
useEffect (()=>{
    setOrientation(height>width ? "portrait" : "landscape" )
},[height,width])

const handleDetailProduct=(product)=>{
    navigation.navigate("Detail",{
        productID:product.id,
        productTitle:product.description,
    })
}

const handleBack=()=>{
    navigation.goBack()
}

return (
    <KeyboardAvoidingView 
    behavior={Platform.OS==='ios' ? "padding" :"height"}
    style={styles.keyboardAvoid}
    keyboardVerticalOffset={10}>
    <Header title={categoryTitle}/>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
    <Searcher >
    <TextInput
               value= {input}
               keyboardType="default"
               style={styles.input}
               placeholder="Search a product"
               onChangeText={setInput}
     />    
     <TouchableOpacity onPress={handleErase}>
     <Entypo name="erase" size={30} />
     </TouchableOpacity>
     </Searcher>
     <View style={styles.listContainer}>
         <List data={productsFiltered} itemType={"Product"} onPress={handleDetailProduct}/>
         <Button title="Go back" onPress={handleBack} />
      </View>
      </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
)
}
export default ProductScreen;

const styles=StyleSheet.create({
    keyboardAvoid: {
        flex: 1,
    },
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
        marginBottom:10,
       
    },

})