import React, {useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {PasswordInput} from "./PasswordInput";
import {Navigate} from "react-router-dom";
import {PATH} from "../../App";
import {carsApiLogin} from "../../api/cars-api";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {addLogin} from "../../app/reducer/login/login-reducer";


export type RegisterFormType = {
    email: string
    password: string
    confirmPassword: string
}

export const RegisterForm = () => {
    const dispatch = useAppDispatch()

    const {register, handleSubmit, watch, formState: {errors}} = useForm<RegisterFormType>({
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        mode: 'onTouched'
    });

    const password = watch('password', '')

    const [redirect, setRedirect] = useState<boolean>(false)

    const loginList = useAppSelector(state => state.loginList)
    console.log(loginList)

    const onSubmit: SubmitHandler<RegisterFormType> = (data) => {
        // const {confirmPassword, ...restData} = data
        carsApiLogin.addLoginAccount(data)
            .then()
        setRedirect(true)
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
                    label={'Email'}
                    variant={'outlined'}
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Write correct email'
                        }
                    })}
                />

                <div className="authError">
                    {errors.email && <div>{errors.email.message}</div>}
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
                    >
                        Sign up
                    </Button>
                </div>
            </FormGroup>
        </form>
    )
}
