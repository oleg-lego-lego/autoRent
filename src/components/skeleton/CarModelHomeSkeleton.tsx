import React, {useEffect, useState} from "react";
import ContentLoader from "react-content-loader";

export const CarModelHomeSkeleton = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const maxWidth = 100;

    return (
        <ContentLoader
            speed={4}
            width={Math.min(width, maxWidth) + "%"}
            height={53}
            backgroundColor="#a39f9f"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="0" rx="8" ry="8" width="100%" height="53"/>
        </ContentLoader>
    );
};

