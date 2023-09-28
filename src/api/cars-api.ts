import axios from "axios";
import {CarModelsType} from "../app/reducer/carModels";

export const carsApi = {
    getCars() {
        return axios.get<CarModelsType>('https://6512a403b8c6ce52b395f2d4.mockapi.io/api/carRent/cars/')
    }
}