"use client"

import { animate, motion } from "framer-motion"
import { GoChevronDown } from "react-icons/go";
import WorkedWith from "./WorkedWith"
import Footer from "./Footer"
import ProjectsSection from "./ProjectsSection";

export default function HomePage() {
    function scrollDown() {
        animate(0, window.innerHeight, {
            duration: 1,
            ease: "easeInOut",
            onUpdate: (value) => {
                window.scrollTo(0, value)
            }
        })
    }

    return (
        <>
            <div className="flex justify-center items-center h-screen relative bg-background-dark text-text-dark font-body">
                <div>
                    <p className="text-8xl font-display font-bold">I'm Joel</p>
                </div>
                <motion.div
                    className="absolute bottom-16 flex flex-col items-center cursor-pointer"
                    animate={{ y: [-10, 10], gap: ["0.5em", "1em"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    onClick={scrollDown}
                >
                    <p>Keep Scrolling</p>
                    <GoChevronDown />
                </motion.div>
            </div>
            <div className="p-4 pt-8 text-lg font-body bg-background-light">
                <div className="flex flex-col gap-y-4 max-w-4xl m-auto">
                    <h2 className="text-6xl font-display font-bold">About</h2>
                    <p>I'm a high school student (VCE 😰), developer and a content creator based in Melbourne, Australia.</p>
                    <p>My programming journey started in 2015, with a 3 day gamedev program for kids. Nearly 10 years later, I'm still coding somehow, working on more advanced and impactful projects than ever before.</p>
                    <p>Creating personal projects has allowed me to build familiarity with many technologies in various areas of software engineering, such as the web, mobile, mixed reality and artificial intelligence 🤓</p>
                </div>
            </div>
            <WorkedWith />
            <ProjectsSection />
            <Footer />
        </>
    )
}
