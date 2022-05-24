import { colors } from "../Styles/colors"
import { StyleSheet, View,TextInput,TouchableOpacity,Button} from "react-native"
import Searcher from "../Components/Searcher"
import Header from "../Components/Header"
import { PRODUCTS } from "../Data/product"
import React,{ useEffect,useState } from "react"
import List from "../Components/List/Index"
import { Entypo } from '@expo/vector-icons'; 


const ProductScreen=({category={id:1,category:"Cat 1"}, navigation})=>{
const[input, setInput]=useState("")
const handleErase=()=>{setInput("")}
const [productsFiltered,setProductsFiltered]=useState([])
const [initialProducts, setInitialProducts]=useState([])

useEffect (()=>{
    if (initialProducts.length!==0){
        if (input ==="") setProductsFiltered(initialProducts)
        else {const productfiltered=initialProducts.filter(product=>product.description.toLowerCase().includes(input.toLowerCase()))
        setProductsFiltered(productfiltered)}
    }}, [input,initialProducts])

useEffect (()=>{
    const initialProduct=PRODUCTS.filter(product=>product.category===category.id)
    setInitialProducts(initialProduct)
},[])  

const handleDetailProduct=()=>{
    navigation.navigate("Detail")
}

const handleBack=()=>{
    navigation.goBack()
}

return (
    <>
    <Header title={category.category}/>
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
         <Button title="Go back" onPress={handleBack}/>
      </View>
      </View>

    </>
)
}
export default ProductScreen;

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