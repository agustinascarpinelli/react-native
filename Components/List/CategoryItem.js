
import { StyleSheet,View,Text } from "react-native";
import { colors } from "../../Styles/colors";
import React from "react";
const CategoryItem=({category})=>{

    return(
        <View style={styles.container}>
            <Text style={styles.text}>{category.category}</Text>
        </View>
    )
}

export default CategoryItem;
const styles=StyleSheet.create({
    container:{
        width:150,
        height:150,
        justifyContent:'flex-end',
        alignItems:'flex-end',
        padding:15,
        backgroundColor:colors.lighterBlue,
        margin:15,
        borderRadius:10,
    },
    text:{
        fontSize:18,
    }
})