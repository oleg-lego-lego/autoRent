import {configureStore} from "@reduxjs/toolkit";
import carModelsReducer from "./reducer/carModels-reducer";
import bookCarReducer from "./reducer/bookCar-reducer";
import loginReducer from "./reducer/login/login-reducer";
import bookCarInputValueReducer from "./reducer/bookCarInputValue-reducer";
import bookCarMoreInfoReducer from "./reducer/bookCarMoreInfo-reducer";
import authReducer from "./reducer/auth-reducer";

export const store = configureStore({
    reducer: {
        carModels: carModelsReducer,
        bookCar: bookCarReducer,
        bookCarInputValue: bookCarInputValueReducer,
        bookCarMoreInfo: bookCarMoreInfoReducer,
        loginList: loginReducer,
        auth: authReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch