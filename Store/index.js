import {configureStore} from '@reduxjs/toolkit'
import productsReducer from '../Features/Products'
import categoriesReducer from '../Features/Categories'
const store= configureStore({
    reducer:{
        categories:categoriesReducer,
        products: productsReducer,
    }
})
export default store