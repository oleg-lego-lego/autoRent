import {createSlice} from '@reduxjs/toolkit'
import audiA1 from "../../images/cars-big/audi-box.png";

export interface CarModelsState {
    carBrand: string
    model: string
    price: number
    transmission: string
    motor: string
    img: string
    liters: string
    favorites: boolean
    id: string
}

const initialState: CarModelsState = {
    carBrand: 'Audi',
    model: 'A1',
    price: 45,
    motor: 'benzine',
    transmission: 'automatic',
    img: audiA1,
    liters: '1.9',
    favorites: false,
    id: '0'
}

export const CarModelsSlice = createSlice({
    name: 'carModels',
    initialState,
    reducers: {
        increment: (state) => {

        },
    },
})

// Action creators are generated for each case reducer function
export const {} = CarModelsSlice.actions

export default CarModelsSlice.reducer