import {configureStore} from "@reduxjs/toolkit";
import carModelsReducer from "./reducer/carModels/carModels-reducer";
import bookCarReducer from "./reducer/bookCar/bookCar-reducer";
import loginReducer from "./reducer/login/login-reducer";
import bookCarInputValueReducer from "./reducer/bookCar/bookCarInputValue-reducer";
import bookCarMoreInfoReducer from "./reducer/bookCar/bookCarMoreInfo-reducer";
import authReducer from "./reducer/auth/auth-reducer";
import isLoadingReducer from "./reducer/isLoading/isLoading-reducer";
import errorReducer from "./reducer/error/error-reducer";

export const store = configureStore({
    reducer: {
        carModels: carModelsReducer,
        bookCar: bookCarReducer,
        bookCarInputValue: bookCarInputValueReducer,
        bookCarMoreInfo: bookCarMoreInfoReducer,
        loginList: loginReducer,
        auth: authReducer,
        isLoading: isLoadingReducer,
        error: errorReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch