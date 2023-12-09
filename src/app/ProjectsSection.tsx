import BobaChip from "@/lib/boba-ui/chip/BobaChip";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function ProjectsSection() {
    return (<>
        <div className="bg-background-dark p-8 font-body text-lg">
            <div className="">
                <h2 className="text-6xl font-display font-bold text-text-dark">Projects</h2>
                <div className="grid grid-cols-3 grid-rows-2 my-8 gap-4">
                    <motion.div className="col-span-2"
                        initial={{ opacity: 0, x: -200 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 1 }}
                    >
                        <Link href="/project-cards" target="_blank" className="col-span-2 row-span-1 px-8 bg-background-light rounded-lg flex flex-row gap-4 justify-between items-center">
                            <div>
                                <div className="pt-20 pb-10">
                                    <h3 className="text-4xl font-display font-bold">Project Cards</h3>
                                    <p>Instantly make READMEs stand out.</p>
                                </div>
                                <div className="h-full"></div>
                                <div className="mb-4">
                                    <BobaChip className="border-black">
                                        <p>2023</p>
                                    </BobaChip>
                                </div>
                            </div>


                            <div className="relative h-5/6 w-1/2">
                                <Image src="/home/project-cards.svg" fill className="object-contain" style={{
                                    transform: "perspective(1000px) rotateY(30deg) rotateX(10deg)",
                                    filter: "drop-shadow(-5px 5px 10px rgba(70, 0, 200, 0.5))"
                                }} />
                            </div>

                        </Link>

                    </motion.div>

                    <Link href="/firetrace" target="_blank" className="row-span-2 px-8 py-4 bg-background-light/10 text-text-dark rounded-lg">
                        <div className="flex flex-col h-full">
                            <div className="relative h-32 w-full">
                                <Image src="/home/firetrace.svg" fill className="object-contain" />
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
                    </Link>
                    <Link href="https://github.com/jtpotato/buer" target="_blank" className="col-span-1">
                        <div className="bg-background-light rounded-lg h-full">
                            <div className="flex flex-col px-8 h-full">
                                <h3 className="text-4xl font-display font-bold mt-20">Buer</h3>
                                <p>Discord bot built to summarise conversations.</p>
                                <BobaChip className="border-black mb-4 mt-auto">
                                    <p>2023</p>
                                </BobaChip>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    </>);
}

export default ProjectsSection;