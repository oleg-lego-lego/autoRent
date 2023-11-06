import React from "react";
import ContentLoader from "react-content-loader";

export const CarHomePageSkeleton = () => {
    return (
        <ContentLoader
            speed={4}
            width={330}
            height={284}
            backgroundColor="#a39f9f"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="0" rx="8" ry="8" width="100%" height="284"/>
        </ContentLoader>
    );
};
