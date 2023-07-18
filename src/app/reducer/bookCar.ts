export type BookCarType = {
    id: string
    carType: string
    pickTime: string
    dropTime: string
    carImg: string
    name: string
    lastName: string
    phone: string
    age: string
    price?: number  // fix
}

export const bookCarList: BookCarType[] = []