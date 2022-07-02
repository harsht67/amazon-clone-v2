import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../axios.js'

const initialState = {
    entities: [],
}

// thunk mw 
export const fetchAddress = createAsyncThunk('address/fetchAddress', async (email) => {
    const res = await axios.get('/address/'+email)
    return res.data.addr 
})

const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        addressAdded(state, action) {

        },
        addressRemoved(state, action) {

        },
        addressUpdated(state, action) {

        },
    },
    extraReducers: builder => {
        builder 
            .addCase(fetchAddress.fulfilled, (state, action) => {
                state.entities = action.payload 
            })
    }
})

export const {addressAdded, addressRemoved, addressUpdated} = addressSlice.actions

export default addressSlice.reducer