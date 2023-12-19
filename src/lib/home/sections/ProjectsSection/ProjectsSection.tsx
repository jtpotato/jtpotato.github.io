import BobaChip from "@/lib/boba-ui/chip/BobaChip";
import FuzzyCard from "@/lib/home/FuzzyCard";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { framerVariants } from "../../FramerVariants";
import styles from "./ProjectsSection.module.css";
import ProjectsBackground from "./ProjectsBackground";

function ProjectsSection() {
    return (<>
        <LazyMotion features={domAnimation}>
            <h2 className="text-6xl font-display font-bold text-text-primary py-8 max-w-4xl m-auto">Projects</h2>
            <div className={"p-8 font-body text-lg text-text-primary " + styles.projectsparent}>
                <ProjectsBackground />
                <div className="grid grid-cols-3 grid-rows-2 my-8 gap-4">
                    <m.div className="col-span-2"
                        variants={framerVariants}
                        initial={"left"}
                        whileInView="none"
                        style={{ willChange: "transform" }}
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

                    </m.div>


                    <Link href="/projects/firetrace" target="_blank" className="content row-span-2">
                        <m.div className="row-span-2 w-full h-full"
                            variants={framerVariants}
                            initial={"right"}
                            whileInView="none"
                            transition={{
                                duration: 1,
                                delay: 0,
                            }}
                            style={{ willChange: "transform" }}
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

                        </m.div>
                    </Link>


                    <Link href="https://github.com/jtpotato/buer" target="_blank" className="col-span-2">
                        <m.div className="bg-background-light rounded-lg h-full"
                            variants={framerVariants}
                            initial={"left"}
                            whileInView="none"
                            transition={{
                                duration: 1,
                                delay: 0
                            }}
                            style={{ willChange: "transform" }}
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

                        </m.div>
                    </Link>

                </div>
            </div>
        </LazyMotion>

    </>);
}

export default ProjectsSection;