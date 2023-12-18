"use client"

import WorkedWith from "@/lib/home/sections/WorkedWith"
import Footer from "@/lib/home/sections/Footer"
import ProjectsSection from "@/lib/home/sections/ProjectsSection";
import NameCard from "@/lib/home/sections/NameCard";
import AboutSection from "@/lib/home/sections/About";
import { useEffect, useState } from "react";
import Background from "@/lib/home/Background";
import styles from "./home.module.css"

export default function HomePage() {
    return (
        <>
            <div className={styles.homepage}>
                <Background />
                <NameCard />
                <AboutSection />
                <ProjectsSection />
                <WorkedWith />
                <Footer />
            </div>

        </>
    )
}
