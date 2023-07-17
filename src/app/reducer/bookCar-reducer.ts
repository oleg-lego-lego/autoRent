import {createSlice} from '@reduxjs/toolkit'
import {bookCarList, BookCarType} from "./bookCar";

export interface BookCarStateType {
    bookCar: BookCarType[]
}

const initialState: BookCarStateType = {
    bookCar: bookCarList
}

export const BookCarSlice = createSlice({
    name: 'bookCar',
    initialState,
    reducers: {
        bookCarAdd: (state, action) => {
            state.bookCar.push(action.payload)
            console.log(state)
        },
    },
})

// Action creators are generated for each case reducer function
export const {bookCarAdd} = BookCarSlice.actions

export default BookCarSlice.reducer