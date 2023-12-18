import BobaChip from "@/lib/boba-ui/chip/BobaChip";
import FuzzyCard from "@/lib/home/FuzzyCard";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function ProjectsSection() {
    return (<>
        <div className="p-8 font-body text-lg text-text-primary">
            <div className="">
                <h2 className="text-6xl font-display font-bold">Projects</h2>
                <div className="grid grid-cols-3 grid-rows-2 my-8 gap-4">
                    <motion.div className="col-span-2"
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0, duration: 1 }}
                    >
                        <Link href="/projects/project-cards" target="_blank" className="col-span-2 row-span-1">
                            <FuzzyCard>
                                <div className="p-4 px-8 flex flex-row gap-8">
                                    <div className="flex flex-col gap-8 justify-center">
                                        <div className="">
                                            <h3 className="text-4xl font-display font-bold">Project Cards</h3>
                                            <p>Instantly make READMEs stand out.</p>
                                        </div>
                                        <div>
                                            <BobaChip className="">
                                                <p>2023</p>
                                            </BobaChip>
                                        </div>
                                    </div>


                                    <div className="relative h-72 w-1/2">
                                        <Image src="/home/project-cards.svg" fill className="object-contain" style={{
                                            transform: "perspective(1000px) rotateY(30deg) rotateX(10deg)",
                                            filter: "drop-shadow(-5px 5px 10px rgba(70, 0, 200, 0.5))"
                                        }} alt="A project card." />
                                    </div>
                                </div>

                            </FuzzyCard>
                        </Link>

                    </motion.div>


                    <Link href="/projects/firetrace" target="_blank" className="content row-span-2">
                        <motion.div className="row-span-2 w-full h-full"
                            initial={{
                                opacity: 0,
                                y: -200
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 1,
                                delay: 0,
                            }}
                        >
                            <FuzzyCard>
                                <div className="flex flex-col h-full p-4 px-8">
                                    <div className="relative h-32 w-full">
                                        <Image src="/home/firetrace.svg" fill className="object-contain" alt="Firetrace Logo" />
                                    </div>
                                    <p>Extremely easy-to-use, general bushfire prediction ✨ AI ✨ for Australia.</p>
                                    <div className="flex flex-row gap-2 text-text-secondary-dark mb-0 mt-auto">
                                        <BobaChip className="border-text-secondary-dark">
                                            <p>2023</p>
                                        </BobaChip>
                                        <BobaChip className="border-text-secondary-dark">
                                            <p>1st Place &#8226; Victoria</p>
                                        </BobaChip>
                                    </div>
                                </div>
                            </FuzzyCard>

                        </motion.div>
                    </Link>


                    <Link href="https://github.com/jtpotato/buer" target="_blank" className="col-span-2">
                        <motion.div className="bg-background-light rounded-lg h-full"
                            initial={{
                                opacity: 0,
                                y: 200
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 1,
                                delay: 0
                            }}
                        >
                            <FuzzyCard>
                                <div className="flex flex-col px-8 py-4 h-full gap-8">
                                    <div>
                                        <h3 className="text-4xl font-display font-bold mt-20">Buer</h3>
                                        <p>Discord bot built to summarise conversations.</p>
                                    </div>

                                    <BobaChip>
                                        <p>2023</p>
                                    </BobaChip>
                                </div>
                            </FuzzyCard>

                        </motion.div>
                    </Link>

                </div>
            </div>
        </div>
    </>);
}

export default ProjectsSection;