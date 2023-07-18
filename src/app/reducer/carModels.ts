import {v1} from "uuid";
import Golf6 from "../../images/cars-big/golf6.jpg";
import AudiA1 from "../../images/cars-big/audia1.jpg";
import Toyota from "../../images/cars-big/toyota-corolla.jpg";
import Bmw320 from "../../images/cars-big/bmw320.jpg";
import Benz from "../../images/cars-big/benz.jpg";
import Passat from "../../images/cars-big/passatcc.jpg";


export type CarModelsType = {
    id: string
    name: string
    favorites: boolean
    price: number
    img: string
    model: string
    mark: string
    year: string
    doors: string
    air: string
    transmission: string
    fuel: string
}

export const carModels: CarModelsType[] = [
    {
        id: v1(),
        name: "VW Golf 6",
        price: 37,
        favorites: false,
        img: Golf6,
        model: 'Golf 6',
        mark: "Volkswagen",
        year: "2008",
        doors: "4/5",
        air: "Yes",
        transmission: "Manual",
        fuel: "Diesel",
    },
    {
        id: v1(),
        name: "Audi A1 S-Line",
        price: 45,
        favorites: false,
        img: AudiA1,
        model: "Audi",
        mark: "A1",
        year: "2012",
        doors: "4/5",
        air: "Yes",
        transmission: "Manual",
        fuel: "Gasoline",
    },
    {
        id: v1(),
        name: "Toyota Corolla",
        price: 30,
        favorites: false,
        img: Toyota,
        model: "Corolla",
        mark: "Toyota",
        year: "2006",
        doors: "4/5",
        air: "Yes",
        transmission: "Automatic",
        fuel: "Hybrid",
    },
    {
        id: v1(),
        name: "BMW 320",
        price: 35,
        favorites: false,
        img: Bmw320,
        model: "320",
        mark: "BMW",
        year: "2012",
        doors: "4/5",
        air: "Yes",
        transmission: "Manual",
        fuel: "Diesel",
    },
    {
        id: v1(),
        name: "Mercedes GLK",
        price: 50,
        favorites: false,
        img: Benz,
        model: "Benz GLK",
        mark: "Mercedes",
        year: "2006",
        doors: "4/5",
        air: "Yes",
        transmission: "Manual",
        fuel: "Diesel",
    },
    {
        id: v1(),
        name: "VW Passat CC",
        price: 25,
        favorites: false,
        img: Passat,
        model: "Passat CC",
        mark: "Volkswagen",
        year: "2008",
        doors: "4/5",
        air: "Yes",
        transmission: "Automatic",
        fuel: "Gasoline",
    },
]

