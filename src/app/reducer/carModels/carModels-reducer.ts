import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {CarModelsType} from "./carModels";
import {isDisabledButton, isLoading} from "../isLoading/isLoading-reducer";
import {carsApi} from "../../../api/cars-api";
import {setErrorSnackbar} from "../error/error-reducer";


export const fetchGetCars = createAsyncThunk('cars/fetchGetCars',
    async (_, thunkAPI) => {

        thunkAPI.dispatch(isLoading('loading'));

        try {
            const res = await carsApi.getCars();
            setTimeout(() => {
                thunkAPI.dispatch(getCars(res.data))
            }, 3000)
        } catch (error) {
            thunkAPI.dispatch(setErrorSnackbar(error))
        } finally {
            setTimeout(() => {
                thunkAPI.dispatch(isLoading('idle'))
            }, 3000)
        }
    });

export const fetchPutFavorites = createAsyncThunk('cars/fetchPutFavorites',
    async ({id, favorites}: { id: string, favorites: boolean }, thunkAPI) => {

        thunkAPI.dispatch(isLoading('loading'));
        thunkAPI.dispatch(isDisabledButton(true))

        try {
            const res = await carsApi.putFavorites(id, favorites)
            thunkAPI.dispatch(carModelsFavorites(res.data))
        } catch (error) {
            thunkAPI.dispatch(setErrorSnackbar(error))
        } finally {
            setTimeout(() => {
                thunkAPI.dispatch(isDisabledButton(false))
                thunkAPI.dispatch(isLoading('idle'))
            }, 3000)
        }
    });


export interface CarModelsStateType {
    items: CarModelsType[]
}

const initialState: CarModelsStateType = {
    items: []
}

export const CarModelsSlice = createSlice({
    name: 'carModels',
    initialState,
    reducers: {
        getCars: (state, action: PayloadAction<CarModelsType[]>) => {
            state.items = action.payload
        },
        carModelsFavorites: (state, action: PayloadAction<{ id: string, favorites: boolean }>) => {
            const {id, favorites} = action.payload
            state.items.map(el => el.id === id ? el.favorites = favorites : el)
        },
    },
})

export const {carModelsFavorites, getCars} = CarModelsSlice.actions

export default CarModelsSlice.reducer