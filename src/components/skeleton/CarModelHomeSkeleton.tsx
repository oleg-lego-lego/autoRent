import React from "react"
import ContentLoader from "react-content-loader"

export const CarModelHomeSkeleton = (props: any) => (
    <ContentLoader
        speed={4}
        width={191}
        height={53}
        viewBox="0 0 191 53"
        backgroundColor="#a39f9f"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="8" ry="8" width="191" height="53" />
    </ContentLoader>
)
