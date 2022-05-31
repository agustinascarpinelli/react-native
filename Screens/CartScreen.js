import { StyleSheet,Text,View,TouchableOpacity, FlatList } from "react-native";
import { colors } from "../Styles/colors";
import CartItem from "../Components/CartItem";
import { PRODUCTSSELECTED } from "../Data/productsSelected";
import React from "react";

const handleDelete =(id)=>{
    console.log(`Product ${id} has been deleted`)
}

const handleConfirm =()=>{
    console.log("The order has been confirmed ")
}

const renderItem=(data)=>(
    <CartItem item={data.item} onDelete={handleDelete}/>
)

const CartScreen =()=>{
    const total=200;
    return(
        <View style={styles.container}>
        <View style={styles.list}>
            <FlatList
                data={PRODUCTSSELECTED}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />

        </View>
        <View style={styles.footer}>
            <TouchableOpacity style={styles.confirm} onPress={handleConfirm}>
                <Text>Confirmar</Text>
                <View style={styles.total}>
                    <Text style={styles.text}>Total</Text>
                    <Text style={styles.text}>${total}</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
)
}

export default CartScreen

const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    paddingBottom: 120,
},
list: {
    flex: 1,
},
footer: {
    padding: 12,
    borderTopColor: colors.lightBlue,
    borderTopWidth: 1,
},
confirm: {
    backgroundColor: colors.beige,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
},
total: {
    flexDirection: 'row',
},
text: {
    fontSize: 18,
    fontFamily: 'OpenSans',
    padding: 8
}
})