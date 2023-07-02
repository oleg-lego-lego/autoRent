import {configureStore} from "@reduxjs/toolkit";
import carModelsReducer from "./reducer/carModels-reducer";

export const store = configureStore({
    reducer: {
        carModels: carModelsReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch