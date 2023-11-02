import React from "react"
import ContentLoader from "react-content-loader"

export const СarCharacteristicsHomeSkeleton = (props: any) => (
    <ContentLoader
        speed={4}
        width={250}
        height={265}
        viewBox="0 0 250 265"
        backgroundColor="#a39f9f"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="129" y="76" rx="0" ry="0" width="0" height="2" />
        <rect x="0" y="0" rx="6" ry="6" width="250" height="265" />
    </ContentLoader>
)
