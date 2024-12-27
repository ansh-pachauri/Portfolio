"use client"

import React from "react";
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
    return (
        <div style={{width: `${width}px`, height:`${height}px`}}>
            <Lottie animationData={require(`../public/${animationPath}`)} loop={true} />
        </div>
    );
};

export default DevAnimation;