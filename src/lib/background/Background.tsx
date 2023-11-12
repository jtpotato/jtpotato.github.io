"use client"

import { useEffect, useRef, useState } from "react";
import "./Background.css"

function Background() {
    const backgroundRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            backgroundRef.current!.style.setProperty(`--mouse-x`,  `${e.clientX}px`);
            backgroundRef.current!.style.setProperty(`--mouse-y`,  `${e.clientY}px`);
        }

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [])

    return (<>
        <div className="w-screen h-screen fixed top-0 -z-50 background" ref={backgroundRef}></div>
    </>);
}

export default Background;