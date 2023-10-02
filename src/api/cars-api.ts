import axios from "axios";
import {CarModelsType} from "../app/reducer/carModels";

const instance = axios.create({
    baseURL: 'https://6512a403b8c6ce52b395f2d4.mockapi.io/api/carRent/',
})

export const carsApi = {
    getCars() {
        return instance.get<CarModelsType>('/cars/')
    },
    getFavorites(id: string, favorites: boolean) {
        return instance.put<CarModelsType>(`cars/${id}`, {favorites})
    }
}