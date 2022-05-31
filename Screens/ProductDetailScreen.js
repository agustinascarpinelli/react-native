import { StyleSheet, Text,View,useWindowDimensions, Image, Button, KeyboardAvoidingView, Keyboard,Platform, TouchableWithoutFeedback } from "react-native";
import React, {useEffect, useState} from "react";
import Header from "../Components/Header";
import { PRODUCTS } from "../Data/product";

const ProductDetailScreen=({
    route,
    navigation

})=>{

    const {width,height}=useWindowDimensions()
    const {productID,productTitle} =route.params;
    const [product, setProduct]=useState(null)
    useEffect(()=>{
        const productSelected=PRODUCTS.find(prod=>prod.id===productID)
        setProduct(productSelected)
    }, [productID])
    const handleBack=()=>{
        navigation.goBack()
    }
    return(
        product && (
        <KeyboardAvoidingView 
        behavior={Platform.OS==='ios' ? "padding" : "height"}
        style={styles.keyboardAvoid}
        keyboardVerticalOffset={10}>
          
        <Header title ={productTitle}/>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <Image
            source={{uri:product?.image}}
            style={styles.image}
            resizeMode="cover"
            />
            <Text style={styles.prodDescription}>{product?.description}</Text>
            <Text>{product?.price}</Text>
            <Button onPress={handleBack} title='Go back'/>
        </View>
        </TouchableWithoutFeedback>
            
        </KeyboardAvoidingView>
        )
    )
}

export default ProductDetailScreen

const styles=StyleSheet.create({
    keyboardAvoid: {
        flex: 1,
    },
    image:{
        height:300,
        marginTop:30,
    },
    container:{
        flex:1,
        flexDirection:"column",
    },
 
   prodDescription:{
       fontFamily:'OpenSans',
   }
   
})