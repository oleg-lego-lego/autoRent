import React, {FC, useState} from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import {RegisterOptions} from 'react-hook-form';
import {UseFormRegister} from "react-hook-form/dist/types/form";

type PasswordInputPropsType = {
    register: UseFormRegister<any>
    label: string
    name: string
    options: RegisterOptions
}

export const PasswordInput: FC<PasswordInputPropsType> = (
    {register, label, name, options}) => {

    const [values, setValues] = useState({password: '', showPassword: false})

    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword})
    }

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, password: event.currentTarget.value})
    }

    return (
        <TextField
            type={values.showPassword ? 'text' : 'password'}
            label={label}
            margin={'normal'}
            variant={'outlined'}
            autoComplete={'on'}
            size={'small'}
            InputProps={{
                style: {fontSize: '20px'},

                endAdornment:
                    <InputAdornment position={'end'}>
                        <IconButton
                            aria-label={'toggle password visibility'}
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                            {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                        </IconButton>
                    </InputAdornment>
            }}

            {...register(name, {
                value: values.password,
                onChange: handleChange,
                ...options
            })}
        />
    )
}