import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, {AlertProps} from '@mui/material/Alert';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {setErrorSnackbar} from "../app/reducer/error-reducer";


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
    function Alert(props, ref) {

        return (
            <MuiAlert elevation={24} ref={ref} variant="filled" {...props}/>
        );
    });

export const ErrorSnackbar = () => {
    const dispatch = useAppDispatch()
    const error = useAppSelector(state => state.error.error)

    const alertSx = {
        width: '100%',
        fontSize: '15px',
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }

        dispatch(setErrorSnackbar(null))
    };


    return (
        <Snackbar open={error !== null} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={alertSx}>
                {`Error message 😠 ${error}`}
            </Alert>
        </Snackbar>
    );
}
