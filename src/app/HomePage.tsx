"use client"

import { animate, motion } from "framer-motion"
import { GoChevronDown } from "react-icons/go";
import WorkedWith from "./WorkedWith"
import Footer from "./Footer"
import ProjectsSection from "./ProjectsSection";
import BobaChip from "@/lib/boba-ui/chip/BobaChip";

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
                    <motion.p className="text-8xl font-display font-bold"
                        initial={{
                            y: 50,
                            opacity: 0
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2
                        }}
                    >I&apos;m Joel</motion.p>
                    <div className="flex flex-row gap-4 items-center mt-4 text-text-secondary-dark">
                        <BobaChip className="border-text-secondary-dark">Developer</BobaChip>
                        <BobaChip className="border-text-secondary-dark">Melbourne &bull; Australia</BobaChip>
                    </div>

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
            <p className="font-body max-w-4xl m-auto"><strong>Note: </strong>This website is not yet built for mobile... oops...</p>
            <div className="p-4 pt-8 text-lg font-body bg-background-light">
                <div className="flex flex-col gap-y-4 max-w-4xl m-auto">
                    <h2 className="text-6xl font-display font-bold">About</h2>
                    <p>I&apos;m a high school student (VCE 😰), developer and a content creator based in Melbourne, Australia.</p>
                    <p>My programming journey started in 2015 with a 3 day gamedev program. Nearly 10 years later, I&apos;m still coding somehow, working on more advanced and impactful projects than ever before.</p>
                    <p>Creating personal projects has allowed me to build familiarity with many technologies in various areas of software engineering, such as the web, mobile, mixed reality and artificial intelligence 🤓</p>
                </div>
            </div>
            <WorkedWith />
            <ProjectsSection />
            <Footer />
        </>
    )
}
