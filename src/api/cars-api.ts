import axios from "axios";
import {CarModelsType} from "../app/reducer/carModels";
import {BookCarType} from "../app/reducer/bookCar";

const instance = axios.create({
    baseURL: 'https://6512a403b8c6ce52b395f2d4.mockapi.io/api/carRent/',
})

export const carsApi = {
    getCars() {
        return instance.get<CarModelsType>('/cars/')
    },
    getFavorites(id: string, favorites: boolean) {
        return instance.put<CarModelsType>(`/cars/${id}`, {favorites})
    },
    postBookCar(newRentCar: BookCarType) {
        return instance.post<BookCarType>('/bookCar/', newRentCar)
    },
    getBookCar() {
        return instance.get<BookCarType>('/bookCar/')
    },
    deleteBookCar(id: string) {
        return instance.delete<BookCarType>(`/bookCar/${id}`)
    }
}


const instanceLogin = axios.create({
    baseURL: 'https://652293b4f43b17938414a864.mockapi.io/carRent/',
})

export const carsApiLogin = {
    getLoginAccount() {
        return instanceLogin.get('/login/')
    },
    addLoginAccount(newAccount: any) {
        return instanceLogin.post('/login/', newAccount)
    },
}