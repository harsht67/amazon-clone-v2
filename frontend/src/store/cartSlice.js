import { createSlice } from '@reduxjs/toolkit' 

const initialState = {
    items: {
        // '707bc9f1-57b1-4f66-9053-c3331aeaa801': {
        //     id: '707bc9f1-57b1-4f66-9053-c3331aeaa801',
        //     qty: 2,
        //     price: 550,
        // },
        // '56a261e9-49b6-494e-a75e-d473882a6e61': {
        //     id: '56a261e9-49b6-494e-a75e-d473882a6e61',
        //     qty: 1,
        //     price: 600,
        // },
    },
}

// selectors

export const getCartTotal = (items) => (
    items && items.reduce((amount, item) => (item.price*item.qty)+amount, 0)
)

// calc price based on mrp & discount
export const getPrice = (mrp, discount) => (
    Math.floor(mrp-(mrp*discount/100)).toLocaleString()
)

// calc total qty in cart
export const getCartTotalQty = (items) => (
    items.reduce((n, item) => n+item.qty, 0)
)

// slice
const cartSlice = createSlice({
    name: 'cart',
    initialState, 
    reducers: {
        itemAdded(state, action) {
            const {id, qty} = action.payload
            
            if(state.items[id]) {
                state.items[id].qty+=qty
            }
            else {
                state.items[id] = action.payload
            }
        },
        itemDeleted(state, action) {
            const id = action.payload
            delete state.items[id]
        },
        itemQtyChanged(state, action) {
            const {id, qty} = action.payload
            state.items[id].qty = qty
        }
    }
})

export const {itemAdded, itemDeleted, itemQtyChanged} = cartSlice.actions

export default cartSlice.reducer 