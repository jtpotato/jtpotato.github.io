"use client"

import { motion } from "framer-motion"
import WorkedWith from "./WorkedWith"
import Footer from "./Footer"

export default function HomePage() {

    return (
        <>
            <div className="flex justify-center items-center h-screen relative bg-background-dark text-text-dark font-body">
                <div>
                    <p className="text-8xl font-display font-bold">I'm Joel</p>
                </div>
                <div className="absolute bottom-16">
                    <p>Keep Scrolling</p>
                </div>
            </div>
            <div className="p-4 text-lg font-body bg-background-light">
                <div className="flex flex-col gap-y-4 max-w-4xl m-auto">
                    <h2 className="text-6xl font-display font-bold">About</h2>
                    <p>I'm a high school student (VCE 😰), developer and a content creator based in Melbourne, Australia.</p>
                    <p>My programming journey started in 2015, with a 3 day gamedev program for kids. Nearly 10 years later, I'm still coding somehow, working on more advanced and impactful projects than ever before.</p>
                    <p>Creating personal projects has allowed me to build familiarity with many technologies in various areas of software engineering, such as the web, mobile, mixed reality and artificial intelligence 🤓</p>
                </div>
            </div>
            <WorkedWith />
            <Footer />
        </>
    )
}
