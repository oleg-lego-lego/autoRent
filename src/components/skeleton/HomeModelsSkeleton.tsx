import React from "react"
import ContentLoader from "react-content-loader"

export const CarHomePageSkeleton = (props: any) => (
    <ContentLoader
        speed={4}
        width={'50rem'}
        height={284}
        viewBox="0 0 500 284"
        backgroundColor="#a39f9f"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="8" ry="8" width="500" height="284" />
    </ContentLoader>
)
