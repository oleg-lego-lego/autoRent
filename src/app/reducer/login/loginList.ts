export type LoginListType = {
    id: string
    email: string
    password: string
    confirmPassword: string
    redirectLoginValue: boolean
    redirectGarageValue: boolean
}

export const loginList: LoginListType[] = []
