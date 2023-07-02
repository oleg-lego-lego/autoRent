import audiA1 from "../../images/cars-big/audi-box.png";
import {v1} from "uuid";
import Golf6 from "../../images/cars-big/golf6-box.png";
import Camry from "../../images/cars-big/toyota-box.png";
import BMW320 from "../../images/cars-big/bmw-box.png";
import MercedesGLK from "../../images/cars-big/benz-box.png";
import Passat from "../../images/cars-big/passat-box.png";

export type CarModelsType = {
    carBrand: string
    model: string
    price: number
    transmission: string
    motor: string
    img: string
    liters: string
    favorites: boolean
    id: string
}

export const carModels: CarModelsType[] = [
    {
        carBrand: 'Audi',
        model: 'A1',
        price: 45,
        motor: 'benzine',
        transmission: 'automatic',
        img: audiA1,
        liters: '1.9',
        favorites: false,
        id: v1()
    },
    {
        carBrand: 'Volkswagen',
        model: 'Golf 6',
        price: 37,
        motor: 'diesel',
        transmission: 'manual',
        img: Golf6,
        liters: '2.0',
        favorites: false,
        id: v1()
    },
    {
        carBrand: 'Toyota',
        model: 'Camry',
        price: 30,
        motor: 'benzine',
        transmission: 'automatic',
        img: Camry,
        liters: '3.0',
        favorites: false,
        id: v1()
    },
    {
        carBrand: 'BMW',
        model: 'M320',
        price: 35,
        motor: 'benzine',
        transmission: 'manual',
        img: BMW320,
        liters: '2.5',
        favorites: false,
        id: v1()
    },
    {
        carBrand: 'Mercedes',
        model: 'GLK',
        price: 50,
        motor: 'diesel',
        transmission: 'automatic',
        img: MercedesGLK,
        liters: '3.2',
        favorites: false,
        id: v1()
    },
    {
        carBrand: 'Volkswagen',
        model: 'Passat',
        price: 40,
        motor: 'benzine',
        transmission: 'automatic',
        img: Passat,
        liters: '2.0',
        favorites: false,
        id: v1()
    },
]

