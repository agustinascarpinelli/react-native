import { FlatList,StyleSheet, Text,View } from "react-native";
import OrderItem from "../Components/OrderItem";
import { ORDERS } from "../Data/order";
import React from "react";

const renderItem =({item})=>(
    <OrderItem item={item}/>
)

const OrdersScreen =()=>{
    return(
        <View style={styles.container}>
            <FlatList 
            data={ORDERS}
            keyExtractor={item=>item.id}
            renderItem={renderItem}/>
        </View>
    )
}
export default OrdersScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
    }
})