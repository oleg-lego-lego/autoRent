import React, {useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {PasswordInput} from "./PasswordInput";
import {Navigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks/redux";
import {LoginListType} from "../../app/reducer/login/loginList";
import {v1} from "uuid";
import {PATH} from "../../app/PATH/PATH";
import {fetchAddRegisterAccount} from "../../app/reducer/login/login-reducer";


export type RegisterFormType = {
    email: string
    password: string
    confirmPassword: string
}

export const RegisterForm = () => {
    const dispatch = useAppDispatch()

    const isDisabled = useAppSelector(state => state.isLoading.disabled)

    const {register, handleSubmit, watch, formState: {errors}} = useForm<RegisterFormType>({
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        mode: 'onTouched'
    });

    const password = watch('password', '')

    const [errorFindEmail, setErrorFindEmail] = useState<string>('')

    const redirect = useAppSelector(state => state.loginList.setRedirectRegister)

    const loginList = useAppSelector(state => state.loginList)

    const arr: string[] = []
    loginList.login.map(el => arr.push(el.email))

    const onSubmit: SubmitHandler<RegisterFormType> = async (data) => {
        const {confirmPassword, ...restData} = data
        const findEmail = arr.find(i => i.toLowerCase() === restData.email.toLowerCase())

        const newAccount: LoginListType = {
            ...data,
            rememberMe: false,
            redirectLoginValue: true,
            redirectGarageValue: false,
            id: v1()
        }

        if (findEmail) {
            setErrorFindEmail('this email address is already registered');
        } else {
            dispatch(fetchAddRegisterAccount(newAccount))
        }
    }

    const onEnterPress = (key: string) => {
        key === 'Enter' && handleSubmit(onSubmit)
    }

    if (redirect) {
        return <Navigate to={PATH.LOGIN}/>
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            onKeyDown={(e) => onEnterPress(e.key)}
        >
            <FormGroup>
                <TextField
                    autoComplete="username"
                    label={'Email'}
                    variant={'outlined'}
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Write correct email',
                        }
                    })}
                />

                <div className="authError">
                    {errors.email && <div>{errors.email.message}</div>}
                    {errorFindEmail && <div>{errorFindEmail}</div>}
                </div>

                <PasswordInput
                    name={'password'}
                    label={'Password'}
                    register={register}
                    options={
                        {
                            required: 'Password is required',
                            minLength: {
                                value: 8,
                                message: 'Password must be more than 8 characters'
                            }
                        }
                    }
                />

                <div className='authError'>
                    {errors.password && <div>{errors.password.message}</div>}
                </div>

                <PasswordInput
                    name={'confirmPassword'}
                    label={'Confirm password'}
                    register={register}
                    options={
                        {
                            validate: (value: string) =>
                                value === password || 'The passwords do not match'
                        }
                    }
                />

                <div className="authError">
                    {errors.confirmPassword && <div>{errors.confirmPassword.message}</div>}
                </div>

                <div className="button__Login">
                    <Button
                        type={'submit'}
                        variant={'contained'}
                        color={'primary'}
                        fullWidth
                        disabled={isDisabled}
                    >
                        Sign up
                    </Button>
                </div>
            </FormGroup>
        </form>
    )
}
