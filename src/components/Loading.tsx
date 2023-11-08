import React from 'react';
import LinearProgress from "@mui/material/LinearProgress";
import {useAppSelector} from "../hooks/redux";


export const Loading = () => {
    const isLoadingLine = useAppSelector(state => state.isLoading.status)

    return (
        <div className="progress-container">
            {isLoadingLine === 'loading' && <LinearProgress color={'inherit'}/>}
        </div>
    );
};
