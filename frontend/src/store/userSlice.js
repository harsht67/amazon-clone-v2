import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isSignedIn : false,
    data: {},
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userAdded(state, action) {
            state.isSignedIn = true
            state.data = action.payload
        },
        userRemoved(state, action) {
            state.isSignedIn = false
            state.data = {}
        }
    }
})

export const { userAdded, userRemoved } = userSlice.actions

export default userSlice.reducer