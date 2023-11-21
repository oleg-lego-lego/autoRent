import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface BookCarMoreInfoStateType {
    carImages: string
    priceCar: number
}

const initialState: BookCarMoreInfoStateType = {
    carImages: '',
    priceCar: 0,
}

export const BookCarMoreInfoSlice = createSlice({
    name: 'bookCarImages',
    initialState,
    reducers: {
        selectImagesBookCar: (state, action: PayloadAction<string>) => {
            state.carImages = action.payload
        },
        priceBookCar: (state, action: PayloadAction<number>) => {
            state.priceCar = action.payload
        }
    },
})

export const {selectImagesBookCar, priceBookCar} = BookCarMoreInfoSlice.actions

export default BookCarMoreInfoSlice.reducer