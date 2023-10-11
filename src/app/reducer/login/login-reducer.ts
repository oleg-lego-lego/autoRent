import {createSlice} from '@reduxjs/toolkit'
import {loginList, LoginListType} from "./loginList";


export interface LoginStateType {
    login: LoginListType[]
}

const initialState: LoginStateType = {
    login: loginList
}

export const loginSlice = createSlice({
    name: 'loginList',
    initialState,
    reducers: {
        addLogin: (state, action) => {
            state.login = action.payload
        },
        checkUser: (state, action) => {
            state.login.find(el => el.email === action.payload.email
                ? action.payload.redirectValue = true : action.payload.redirectValue = false)
        }
    },
})

export const {addLogin, checkUser} = loginSlice.actions

export default loginSlice.reducer