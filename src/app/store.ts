import {configureStore} from "@reduxjs/toolkit";
import carModelsReducer from "./reducer/carModels-reducer";
import bookCarReducer from "./reducer/bookCar-reducer";
import loginReducer from "./reducer/login/login-reducer";

export const store = configureStore({
    reducer: {
        carModels: carModelsReducer,
        bookCar: bookCarReducer,
        loginList: loginReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch