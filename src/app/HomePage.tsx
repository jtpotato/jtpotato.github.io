"use client"

import Cursor from "@/lib/home/Cursor"
import { motion } from "framer-motion"

export default function HomePage() {

    return (
        <>
            <div className="flex justify-center items-center h-screen relative bg-background-dark text-text-dark font-body">
                <div>
                    <p className="text-8xl font-display font-bold">I'm Joel</p>
                    <p>I go by jtpotato on the internet.</p>
                </div>
                <div className="absolute bottom-16">
                    <p>Keep Scrolling</p>
                </div>
            </div>
            <div className="p-4">
                <h2 className="text-8xl font-display font-bold">About Me</h2>
                <p className="text-xl font-body">I'm a student, developer, and a content creator.</p>
            </div>
        </>
    )
}
