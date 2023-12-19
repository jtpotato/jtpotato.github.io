"use client"

import WorkedWith from "@/lib/home/sections/WorkedWith"
import Footer from "@/lib/home/sections/Footer"
import ProjectsSection from "@/lib/home/sections/ProjectsSection/ProjectsSection";
import NameCard from "@/lib/home/sections/NameCard";
import AboutSection from "@/lib/home/sections/About";
import styles from "./home.module.css"
import { MotionConfig } from "framer-motion";

export default function HomePage() {
    return (
        <>
            <div className={styles.homepage}>
                <MotionConfig reducedMotion={"user"}>
                    <NameCard />
                    <AboutSection />
                    <ProjectsSection />
                    <WorkedWith />
                    <Footer />
                </MotionConfig>
            </div>
        </>
    )
}
