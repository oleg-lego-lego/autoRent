import {createSlice} from '@reduxjs/toolkit'
import {LoginListType} from "./login/loginList";

export interface AuthStateType {
    auth: LoginListType[]
}

const initialState: AuthStateType = {
    auth: []
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getAuthUser: (state, action) => {
            state.auth = action.payload
        },
    },
})

export const {getAuthUser,} = authSlice.actions

export default authSlice.reducer