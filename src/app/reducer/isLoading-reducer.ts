import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export interface LoadingStateType {
    status: RequestStatusType,
    disabled: boolean,
}

const initialState: LoadingStateType = {
    status: 'idle',
    disabled: false,
};

export const IsLoadingSlice = createSlice({
    name: 'Loading',
    initialState,
    reducers: {
        isLoading: (state, action: PayloadAction<RequestStatusType>) => {
            state.status = action.payload
        },
        isDisabledButton: (state, action: PayloadAction<boolean>) => {
            state.disabled = action.payload
        },
    },
})

export const {isLoading, isDisabledButton} = IsLoadingSlice.actions

export default IsLoadingSlice.reducer