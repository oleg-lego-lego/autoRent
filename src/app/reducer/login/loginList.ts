export type LoginListType = {
    id: string
    email: string
    rememberMe: boolean
    password: string
    confirmPassword: string
    redirectLoginValue: boolean
    redirectGarageValue: boolean
}

export const loginList: LoginListType[] = []
