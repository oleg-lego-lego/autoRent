import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {loginList, LoginListType} from "./loginList";
import {isLoading} from "../isLoading-reducer";
import {carsApiLogin} from "../../../api/cars-api";
import {setErrorSnackbar} from "../error-reducer";
import {logoutUserValue} from "../auth-reducer";


export const fetchAddLogin = createAsyncThunk('login/fetchAddLogin',
    async (_, thunkAPI) => {

        thunkAPI.dispatch(isLoading('loading'));

        try {
            const res = await carsApiLogin.getLoginAccount()
            thunkAPI.dispatch(addLogin(res.data))
            thunkAPI.dispatch(logoutUserValue(false));
        } catch (error) {
            thunkAPI.dispatch(setErrorSnackbar(error))
        } finally {
            setTimeout(() => {
                thunkAPI.dispatch(isLoading('idle'))
            }, 3000)
        }
    });


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