import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface BookCarInputValueStateType {
    carType: string
    pickTime: string
    dropTime: string
    carImg: string
    error: string
    showDoneMessage: string
    modal: boolean
    name: string
    lastName: string
    phone: string
    age: string
    nameError: string
    lastNameError: string
    phoneError: string
    ageError: string
    isValid: boolean,
}

const initialState: BookCarInputValueStateType = {
    carType: '',
    pickTime: '',
    dropTime: '',
    carImg: '',
    error: '',
    showDoneMessage: '',
    modal: false,
    name: '',
    lastName: '',
    phone: '',
    age: '',
    nameError: '',
    lastNameError: '',
    phoneError: '',
    ageError: '',
    isValid: false,
}

export const BookCarInputValueSlice = createSlice({
    name: 'bookCarInputValue',
    initialState,
    reducers: {
        setCarType: (state, action: PayloadAction<string>) => {
            state.carType = action.payload;
        },
        setPickTime: (state, action: PayloadAction<string>) => {
            state.pickTime = action.payload;
        },
        setDropTime: (state, action: PayloadAction<string>) => {
            state.dropTime = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        setShowDoneMessage: (state, action: PayloadAction<string>) => {
            state.showDoneMessage = action.payload;
        },
        setModal: (state, action: PayloadAction<boolean>) => {
            state.modal = action.payload;
        },
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setLastName: (state, action: PayloadAction<string>) => {
            state.lastName = action.payload;
        },
        setPhone: (state, action: PayloadAction<string>) => {
            state.phone = action.payload;
        },
        setAge: (state, action: PayloadAction<string>) => {
            state.age = action.payload;
        },
        setNameError: (state, action: PayloadAction<string>) => {
            state.nameError = action.payload;
        },
        setLastNameError: (state, action: PayloadAction<string>) => {
            state.lastNameError = action.payload;
        },
        setPhoneError: (state, action: PayloadAction<string>) => {
            state.phoneError = action.payload;
        },
        setAgeError: (state, action: PayloadAction<string>) => {
            state.ageError = action.payload;
        },
        setIsValid: (state, action: PayloadAction<boolean>) => {
            state.isValid = action.payload;
        },
    },
})

export const {
    setCarType,
    setPickTime,
    setDropTime,
    setError,
    setShowDoneMessage,
    setModal,
    setName,
    setLastName,
    setPhone,
    setAge,
    setNameError,
    setLastNameError,
    setPhoneError,
    setAgeError,
    setIsValid,
} = BookCarInputValueSlice.actions

export default BookCarInputValueSlice.reducer