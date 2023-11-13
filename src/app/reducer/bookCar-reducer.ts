import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {bookCarList, BookCarType} from "./bookCar";
import {isLoading} from "./isLoading-reducer";
import {carsApi} from "../../api/cars-api";
import {setErrorSnackbar} from "./error-reducer";
import {
    setAge,
    setCarType,
    setDropTime,
    setLastName,
    setModal,
    setName,
    setPhone,
    setPickTime,
    setShowDoneMessage
} from "./bookCarInputValue-reducer";


export const fetchPostBookCar = createAsyncThunk('bookCar/fetchPostBookCar',
    async ({newRentCar, modal}: { newRentCar: BookCarType, modal: boolean }, thunkAPI) => {

        const textDoneMessage = 'The order has been placed correctly and is in your personal account.'

        thunkAPI.dispatch(isLoading('loading'))

        try {
            await carsApi.postBookCar(newRentCar)

            thunkAPI.dispatch(setShowDoneMessage(textDoneMessage))
            thunkAPI.dispatch(setCarType(''))
            thunkAPI.dispatch(setPickTime(''))
            thunkAPI.dispatch(setDropTime(''))
            thunkAPI.dispatch(setName(''))
            thunkAPI.dispatch(setLastName(''))
            thunkAPI.dispatch(setPhone(''))
            thunkAPI.dispatch(setAge(''))
        } catch (error) {
            thunkAPI.dispatch(setErrorSnackbar(error))
        } finally {
            thunkAPI.dispatch(setModal(!modal))

            setTimeout(() => {
                thunkAPI.dispatch(isLoading('idle'))
            }, 3000)
        }
    });


export const fetchBookCarAdd = createAsyncThunk('bookCar/fetchBookCarAdd',
    async (_, thunkAPI) => {

        thunkAPI.dispatch(isLoading('loading'))

        try {
            const res = await carsApi.getBookCar()
            thunkAPI.dispatch(bookCarAdd(res.data))
        } catch (error) {
            thunkAPI.dispatch(setErrorSnackbar(error))
        } finally {
            setTimeout(() => {
                thunkAPI.dispatch(isLoading('idle'))
            }, 3000)
        }
    });


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
            state.bookCar = action.payload
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