import { StyleSheet, Text,View, Image, Dimensions, Button } from "react-native";
import React, {useEffect, useState} from "react";
import Header from "../Components/Header";

const ProductDetailScreen=({
    product={
        id:2,
        category:1,
        description:"Product 1",
        price:1,
        image:"https://dummyimage.com/250/ffffff/000000",
    },
    navigation

})=>{

    const handleBack=()=>{
        navigation.goBack()
    }
    return(
        <>
        <Header title ={product.description}/>
        <View style={styles.container}>
            <Image
            source={{uri:product.image}}
            style={styles.image}
            resizeMode="cover"
            />
            <Text style={styles.prodDescription}>{product.description}</Text>
            <Text>{product.price}</Text>
            <Button onPress={handleBack} title='Volver atras'/>
        </View>
        </>
    )
}

export default ProductDetailScreen

const styles=StyleSheet.create({
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