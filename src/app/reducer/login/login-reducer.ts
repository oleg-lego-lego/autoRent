import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {loginList, LoginListType} from "./loginList";
import {isDisabledButton, isLoading} from "../isLoading-reducer";
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

export const fetchAddRegisterAccount = createAsyncThunk('login/fetchAddRegisterAccount',
    async (newAccount: LoginListType, thunkAPI) => {

        thunkAPI.dispatch(isLoading('loading'))
        thunkAPI.dispatch(isDisabledButton(true))
        try {
            await carsApiLogin.addLoginAccount(newAccount)
            thunkAPI.dispatch(setRedirectForRegisterPage(true))
        } catch (error) {
            thunkAPI.dispatch(setErrorSnackbar(error))
        } finally {
            setTimeout(() => {
                thunkAPI.dispatch(isDisabledButton(false))
                thunkAPI.dispatch(isLoading('idle'))
            }, 3000)
        }
    });


export interface LoginStateType {
    login: LoginListType[]
    setRedirectRegister: boolean
}

const initialState: LoginStateType = {
    login: loginList,
    setRedirectRegister: false
}

export const loginSlice = createSlice({
    name: 'loginList',
    initialState,
    reducers: {
        addLogin: (state, action) => {
            state.login = action.payload
        },
        setRedirectForRegisterPage: (state, action) => {
            state.setRedirectRegister = action.payload
        },
    },
})

export const {addLogin, setRedirectForRegisterPage} = loginSlice.actions

export default loginSlice.reducer