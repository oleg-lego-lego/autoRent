import {createSlice} from '@reduxjs/toolkit'
import {CarModelsType} from "./carModels";

export interface CarModelsStateType {
    items: CarModelsType[]
}

const initialState: CarModelsStateType = {
    items: []
}

export const CarModelsSlice = createSlice({
    name: 'carModels',
    initialState,
    reducers: {
        carModelsFavorites: (state, action) => {
            const {id, favorites} = action.payload
            state.items.map(el => el.id === id ? el.favorites = !favorites : el)
        },
        getCars: (state, action) => {
            state.items = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const {carModelsFavorites, getCars} = CarModelsSlice.actions

export default CarModelsSlice.reducer