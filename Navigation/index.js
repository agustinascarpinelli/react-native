import CategoriesScreen from "../Screens/CategoriesScreen";
import ProductDetailScreen from "../Screens/ProductDetailScreen";
import ProductScreen from "../Screens/ProductScreen";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from "react";


const Stack =createNativeStackNavigator();
function MainNavigation(){
    return(
        <NavigationContainer> 
            <Stack.Navigator initialRouteName="Categories"
            screenOptions={{
                headerShown:false
            }}>
                <Stack.Screen name="Categories" component ={CategoriesScreen}/>
                <Stack.Screen name ="Products" component={ProductScreen}/>
                <Stack.Screen name="Detail" component={ProductDetailScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MainNavigation;