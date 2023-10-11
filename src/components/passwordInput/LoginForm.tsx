import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Navigate, NavLink} from 'react-router-dom';
import Button from '@mui/material/Button';
import React, {useState} from 'react';
import {PasswordInput} from "./PasswordInput";
import {PATH} from "../../App";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {checkUser} from "../../app/reducer/login/login-reducer";
import {LoginListType} from "../../app/reducer/login/loginList";


type LoginFormType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm = () => {
    const [redirectValue, setRedirectValue] = useState<boolean | LoginListType>(false)

    const {register, control, handleSubmit, formState: {errors}} = useForm<LoginFormType>({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        mode: 'onTouched'
    });

    const dispatch = useAppDispatch()
    const loginList = useAppSelector(state => state.loginList)

    const onSubmit: SubmitHandler<LoginFormType> = (data) => {
        dispatch(checkUser(data.email))
    }



    console.log(loginList)

    const asd = () => {
        const redirect = loginList.login.find(el => el.email === el.email)
        console.log(loginList.login)
        // setRedirectValue(redirect)
    }

    const onEnterPress = (key: string) => {
        key === 'Enter' && handleSubmit(onSubmit)
    }

    if (redirectValue) {
        return <Navigate to={PATH.HOME}/>
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="form__wrapper"
            onKeyDown={(e) => onEnterPress(e.key)}
        >
            <FormGroup>
                <TextField
                    id={'outlined-basic'}
                    variant={'outlined'}
                    label={'Email'}
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Enter valid email please'
                        }
                    })}
                />

                <div className="form__authError">
                    {errors.email && <div>{errors.email.message}</div>}
                </div>

                <PasswordInput
                    register={register}
                    name={'password'}
                    label={'Password'}
                    options={{
                        required: 'Password is required',
                        minLength: {
                            value: 8,
                            message: 'Password must be more than 8 characters'
                        }
                    }}
                />

                <div className="form__authError">
                    {errors.password && <div>{errors.password.message}</div>}
                </div>

                <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                    <FormControlLabel
                        label={'Remember me'}
                        style={{marginTop: '15px'}}
                        control={
                            <Controller name="rememberMe" control={control}
                                        render={({field}) =>
                                            <Checkbox {...field} checked={!!field.value}/>}
                            />
                        }
                    />
                </div>
                <NavLink to={'Path.ForgotPassword'} className="forgotPassword">Forgot password ?</NavLink>
                <div className="button__Login">
                    <Button
                        type={'submit'}
                        variant={'contained'}
                        color={'primary'}
                        disabled={!'loading'} //fix
                        fullWidth
                    >
                        Sign up
                    </Button>
                </div>
            </FormGroup>
        </form>
    )
}