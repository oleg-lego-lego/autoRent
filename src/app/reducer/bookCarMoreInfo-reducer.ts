import {createSlice} from '@reduxjs/toolkit'

export interface BookCarMoreInfoStateType {
    carImages: string
    priceCar: string
}

const initialState: BookCarMoreInfoStateType = {
    carImages: '',
    priceCar: '',
}

export const BookCarMoreInfoSlice = createSlice({
    name: 'bookCarImages',
    initialState,
    reducers: {
        selectImagesBookCar: (state, action) => {
            state.carImages = action.payload
        },
        priceBookCar: (state, action) => {
            state.priceCar = action.payload
        }
    },
})

export const {selectImagesBookCar, priceBookCar} = BookCarMoreInfoSlice.actions

export default BookCarMoreInfoSlice.reducer