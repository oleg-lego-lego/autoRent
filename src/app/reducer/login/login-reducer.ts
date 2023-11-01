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
    },
})

export const {addLogin} = loginSlice.actions

export default loginSlice.reducer