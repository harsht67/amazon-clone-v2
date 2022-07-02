import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './cartSlice.js'
import userReducer from './userSlice.js'
// import addressReducer from './addressSlice.js'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
        // address: addressReducer,
    }
})

export default store