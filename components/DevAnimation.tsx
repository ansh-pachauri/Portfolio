"use client"

import React,{useState, useEffect} from "react";
import Lottie from "lottie-react";

interface AnimationProps{
    animationPath:string;
    width?:number | string,
    height?:number | string
}

const DevAnimation: React.FC<AnimationProps> = ({
    animationPath,
    width=300,
    height=300
}) => {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        import(`../public/${animationPath}`).then(data => {
            setAnimationData(data.default);
        });
    }, [animationPath]);

    if (!animationData) {
        return <div className="flex justify-center items-center h-full">Loading...</div>;
    }

    return (
        <div style={{width: `${width}px`, height:`${height}px`}}>
            <Lottie animationData={animationData} loop={true} />
        </div>
    );
};

export default DevAnimation;