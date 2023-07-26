import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {NavLink} from 'react-router-dom';
import Button from '@mui/material/Button';
import React from 'react';
import {PasswordInput} from "./PasswordInput";


type LoginFormType = {
    email: string
    password: string
    rememberMe: boolean
}
export const LoginForm = () => {
    const {register, control, handleSubmit, formState: {errors}} = useForm<LoginFormType>({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        mode: 'onTouched'
    });

    const onSubmit: SubmitHandler<LoginFormType> = data => {
        // dispatch(loginTC(data))
    }
    const onEnterPress = (key: string) => {
        key === 'Enter' && handleSubmit(onSubmit)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={'form__wrapper'}
            onKeyDown={(e) => onEnterPress(e.key)}
        >
            <FormGroup>
                <TextField
                    label="Email"
                    // margin="none"
                    variant="standard"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Enter valid email please'
                        }
                    })}
                />
                <div className={'form__authError'}>
                    {errors.email && <div>{errors.email.message}</div>}
                </div>
                <PasswordInput register={register} name={'password'} options={{
                    required: 'Password is required', minLength: {
                        value: 8, message: 'Password must be more than 8 characters'
                    }
                }} label={'Password'}/>
                <div className={'form__authError'}>
                    {errors.password && <div>{errors.password.message}</div>}
                </div>
                <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                    <FormControlLabel
                        label={'Remember me'}
                        style={{marginTop: '15px'}}
                        control={<Controller name="rememberMe" control={control}
                                             render={({field}) =>
                                                 <Checkbox {...field} checked={!!field.value}/>}
                        />}
                    />
                </div>
                <NavLink to={'Path.ForgotPassword'} className={'forgotPassword'}>Forgot password ?</NavLink>
                <Button
                    type={'submit'}
                    variant={'contained'}
                    color={'primary'}
                    disabled={!'loading'} //fix
                    fullWidth // fix
                    size="large"
                >
                    Sign in
                </Button>
            </FormGroup>
        </form>
    )
}