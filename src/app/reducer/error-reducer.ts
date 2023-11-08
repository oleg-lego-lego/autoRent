import {createSlice} from '@reduxjs/toolkit'

export interface ErrorStateType {
    error: null | string
}

const initialState: ErrorStateType = {
    error: null
}

export const ErrorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setErrorSnackbar: (state, action) => {
            state.error = action.payload
        }
    },
})

export const {setErrorSnackbar} = ErrorSlice.actions

export default ErrorSlice.reducer