import {createSlice} from '@reduxjs/toolkit'

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export interface LoadingStateType {
    status: RequestStatusType
}

const initialState: LoadingStateType = {
    status: 'idle'
};

export const IsLoadingSlice = createSlice({
    name: 'Loading',
    initialState,
    reducers: {
        isLoading: (state, action) => {
            state.status = action.payload
        },
    },
})

export const {isLoading} = IsLoadingSlice.actions

export default IsLoadingSlice.reducer