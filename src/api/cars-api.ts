import axios from "axios";
import {CarModelsType} from "../app/reducer/carModels/carModels";
import {BookCarType} from "../app/reducer/bookCar/bookCar";
import {LoginListType} from "../app/reducer/login/loginList";

const instance = axios.create({
    baseURL: 'https://6512a403b8c6ce52b395f2d4.mockapi.io/api/carRent/',
})

export const carsApi = {
    getCars() {
        return instance.get<CarModelsType[]>('/cars/')
    },
    putFavorites(id: string, favorites: boolean) {
        return instance.put<CarModelsType>(`/cars/${id}`, {favorites})
    },
    postBookCar(newRentCar: BookCarType) {
        return instance.post<BookCarType>('/bookCar/', newRentCar)
    },
    getBookCar() {
        return instance.get<BookCarType[]>('/bookCar/')
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
        return instanceLogin.get<LoginListType[]>('/login/')
    },
    addLoginAccount(newAccount: LoginListType) {
        return instanceLogin.post<LoginListType>('/login/', newAccount)
    },
    userInLogged(userInLogged: LoginListType) {
        return instanceLogin.post<LoginListType>('/userInLogged/', userInLogged)
    },
    userOutLogged(id: string) {
        return instanceLogin.delete<LoginListType>(`/userInLogged/${id}`)
    },
    getUserInLogged() {
        return instanceLogin.get<LoginListType[]>('/userInLogged/')
    }
}