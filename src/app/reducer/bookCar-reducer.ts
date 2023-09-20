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
        bookCarOpenDescription: (state, action) => {
            const {id, open} = action.payload
            state.bookCar.map(el => el.id === id ? el.bookCarOpen = open : el)
        }
    },
})

export const {
    bookCarAdd,
    bookCarDelete,
    bookCarOpenDescription,
} = BookCarSlice.actions

export default BookCarSlice.reducer