import React from "react"
import ContentLoader from "react-content-loader"

export const CarCardSkeleton = (props: any) => {
    return (
        <div className="models__box">
            <ContentLoader
                speed={4}
                width={318}
                height={500}
                viewBox="0 0 318 500"
                backgroundColor="#a39f9f"
                foregroundColor="#ecebeb"
                gradientDirection={'top-bottom'}
                {...props}
            >
                <rect x="0" y="0" rx="0" ry="0" width="318" height="2"/>
                <rect x="0" y="0" rx="0" ry="0" width="2" height="500"/>

                <rect x="17" y="10" rx="8" ry="8" width="284" height="200"/>
                <rect x="34" y="235" rx="8" ry="8" width="250" height="50"/>
                <rect x="79" y="305" rx="8" ry="8" width="160" height="70"/>
                <rect x="79" y="395" rx="0" ry="0" width="160" height="3"/>
                <rect x="34" y="415" rx="8" ry="8" width="250" height="60"/>

                <rect x="316" y="0" rx="0" ry="0" width="2" height="500"/>
                <rect x="0" y="498" rx="0" ry="0" width="318" height="2"/>
            </ContentLoader>
        </div>
    )
}