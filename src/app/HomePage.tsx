"use client"

import WorkedWith from "./WorkedWith"
import Footer from "./Footer"
import ProjectsSection from "./ProjectsSection";
import NameCard from "./NameCard";
import AboutSection from "./About";
import { useEffect, useState } from "react";
import useHomeStore from "@/lib/home/HomeStore";
import Background from "@/lib/home/Background";

export default function HomePage() {
    const [styleObject, setStyleObject] = useState<any>({
        "--color-text-secondary": "#aaa",
        "--color-text-primary": "#fff",
        "--color-background-a": "#000",
        "--color-background-b": "#221111cc",
        "--color-background-c": "#222233cc",
    })

    const theme = useHomeStore(state => state.theme)

    useEffect(() => {
        switch (theme) {
            case "name":
                setStyleObject({
                    "--color-text-secondary": "#aaa",
                    "--color-text-primary": "#fff",
                    "--color-background-a": "#000",
                    "--color-background-b": "#221111ff",
                    "--color-background-c": "#222233ff",
                })
                break;
            default:
                break;
        }
    }, [theme])

    return (
        <>
            <div style={styleObject}>
                <Background />
                <NameCard />
                <p className="font-body max-w-4xl m-auto"><strong>Note: </strong>This website is not yet built for mobile... oops...</p>
                <AboutSection />
                <WorkedWith />
                <ProjectsSection />
                <Footer />
            </div>

        </>
    )
}
