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
            thunkAPI.dispatch(logoutUserValue(false))
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
                thunkAPI.dispatch(setRedirectForRegisterPage(false))
                thunkAPI.dispatch(isLoading('idle'))
            }, 3000)
        }
    });

export const fetchUserLogout = createAsyncThunk('login/fetchUserLogout',
    async ({id, logoutValue}: {id: string, logoutValue: boolean}, thunkAPI) => {

        thunkAPI.dispatch(isLoading('loading'))
        thunkAPI.dispatch(isDisabledButton(true))

        try {
            await carsApiLogin.userOutLogged(id)
            thunkAPI.dispatch(logoutUserValue(logoutValue));
        } catch (error) {
            thunkAPI.dispatch(setErrorSnackbar(error))
        } finally {
            setTimeout(() => {
                thunkAPI.dispatch(isDisabledButton(false))
                thunkAPI.dispatch(isLoading('idle'))
            }, 3000)
        }
    });

export const fetchUserInLogged = createAsyncThunk('login/fetchUserInLogged',
    async (userInLogged: LoginListType, thunkAPI) => {

        thunkAPI.dispatch(isLoading('loading'))
        thunkAPI.dispatch(isDisabledButton(true))

        try {
            await carsApiLogin.userInLogged(userInLogged)
            thunkAPI.dispatch(setRedirectForLoginPage(true));
        } catch (error) {
            thunkAPI.dispatch(setErrorSnackbar(error))
        } finally {
            setTimeout(() => {
                thunkAPI.dispatch(setRedirectForLoginPage(false));
                thunkAPI.dispatch(isDisabledButton(false))
                thunkAPI.dispatch(isLoading('idle'))
            }, 3000)
        }
    });


export interface LoginStateType {
    login: LoginListType[]
    setRedirectRegister: boolean
    setRedirectLogin: boolean
}

const initialState: LoginStateType = {
    login: loginList,
    setRedirectRegister: false,
    setRedirectLogin: false,
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
        setRedirectForLoginPage: (state, action) => {
            state.setRedirectLogin = action.payload
        },
    },
})

export const {addLogin, setRedirectForRegisterPage, setRedirectForLoginPage} = loginSlice.actions

export default loginSlice.reducer