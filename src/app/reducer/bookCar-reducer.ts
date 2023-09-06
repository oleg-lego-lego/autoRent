import {createSlice} from '@reduxjs/toolkit'
import {bookCarList, BookCarType} from "./bookCar";

export interface BookCarStateType {
    bookCar: BookCarType[]
}

const initialState: BookCarStateType = {
    bookCar: bookCarList,
}

export const BookCarSlice = createSlice({
    name: 'bookCar',
    initialState,
    reducers: {
        bookCarAdd: (state, action) => {
            state.bookCar.push(action.payload)
        },
        bookCarDelete: (state, action) => {
            state.bookCar = state.bookCar.filter(el => el.id !== action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    bookCarAdd,
    bookCarDelete,
} = BookCarSlice.actions

export default BookCarSlice.reducer