import React from 'react';
import {CarButtonHomeSkeleton} from "./CarButtonHomeSkeleton";
import {CarHomePageSkeleton} from "./HomeModelsSkeleton";
import {CarCharacteristicsHomeSkeleton} from "./CarCharacteristicsHomeSkeleton";
import {CarModelHomeSkeleton} from "./CarModelHomeSkeleton";

export const SkeletonForHome = () => {
    return (
        <>
            <div className="selectCar__box">
                {[1,2,3].map(el => <CarModelHomeSkeleton key={el}/>)}
            </div>
            <div className="car__skeleton">
                <CarHomePageSkeleton/>
                <div className="carCharacter__skeleton">
                    <CarCharacteristicsHomeSkeleton/>
                    <CarButtonHomeSkeleton/>
                </div>
            </div>
        </>
    );
};
