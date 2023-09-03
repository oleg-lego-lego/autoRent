import {createSlice} from '@reduxjs/toolkit'
import {bookCarList, BookCarType} from "./bookCar";

export interface BookCarStateType {
    bookCar: BookCarType[]
    carType: string
    pickTime: string
    dropTime: string
    carImg: string
    error: string
    showDoneMessage: string
    modal: boolean
}

const initialState: BookCarStateType = {
    bookCar: bookCarList,
    carType: '',
    pickTime: '',
    dropTime: '',
    carImg: '',
    error: '',
    showDoneMessage: '',
    modal: false,
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
        setCarType: (state, action) => {
            state.carType = action.payload;
        },
        setPickTime: (state, action) => {
            state.pickTime = action.payload;
        },
        setDropTime: (state, action) => {
            state.dropTime = action.payload;
        },
        setCarImg: (state, action) => {
            state.carImg = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setShowDoneMessage: (state, action) => {
            state.showDoneMessage = action.payload;
        },
        setModal: (state, action) => {
            state.modal = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    bookCarAdd,
    bookCarDelete,
    setCarType,
    setPickTime,
    setDropTime,
    setCarImg,
    setError,
    setShowDoneMessage,
    setModal,
} = BookCarSlice.actions

export default BookCarSlice.reducer