import {createSlice} from '@reduxjs/toolkit'
import {LoginListType} from "./login/loginList";

export interface AuthStateType {
    auth: LoginListType[],
    logoutValue: boolean

}

const initialState: AuthStateType = {
    auth: [],
    logoutValue: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getAuthUser: (state, action) => {
            state.auth = action.payload
        },
        logoutUserValue: (state, action) => {
            state.logoutValue = action.payload
        }
    },
})

export const {getAuthUser, logoutUserValue} = authSlice.actions

export default authSlice.reducer