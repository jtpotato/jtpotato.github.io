"use client"

import { useEffect, useRef, useState } from "react";
import "./FancyBackground.css"

function FancyBackground() {
    const [style, setStyle] = useState({
        "--cursor-x": "0px",
        "--cursor-y": "0px",
    })

    const fancyNameRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            const rect = fancyNameRef.current!.getBoundingClientRect();

            setStyle({
                "--cursor-x": `${((e.clientX - rect.left) / rect.width) * 100}%`,
                "--cursor-y": `${((e.clientY - rect.top) / rect.height) * 100}%`,
            });
        }

        window.addEventListener("mousemove", onMouseMove);

        return () => window.removeEventListener("mousemove", onMouseMove);
    })

    return (<>
        <div className="absolute -z-10 top-0 left-0 fancybackground h-screen w-screen" style={style} ref={fancyNameRef}>

        </div>
    </>);
}

export default FancyBackground;