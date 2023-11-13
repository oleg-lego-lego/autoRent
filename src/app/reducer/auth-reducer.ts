import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {LoginListType} from "./login/loginList";
import {isLoading} from "./isLoading-reducer";
import {carsApiLogin} from "../../api/cars-api";
import {setErrorSnackbar} from "./error-reducer";


export const fetchGetUserInLogged = createAsyncThunk('auth/fetchGetAuthUser',
    async (_, thunkAPI) => {

        thunkAPI.dispatch(isLoading('loading'));

        try {
            const res = await carsApiLogin.getUserInLogged()
            thunkAPI.dispatch(getAuthUser(res.data))
        } catch (error) {
            thunkAPI.dispatch(setErrorSnackbar(error))
        } finally {
            setTimeout(() => {
                thunkAPI.dispatch(isLoading('idle'))
            }, 3000)
        }
    });


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