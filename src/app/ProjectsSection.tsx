import Image from "next/image";

function ProjectsSection() {
    return (<>
        <div className="bg-background-dark p-8 font-body text-lg">
            <div className="max-w-4xl m-auto">
                <h2 className="text-6xl font-display font-bold text-text-dark">Projects</h2>
                <div className="grid grid-cols-3 my-8">
                    <div className="col-span-2 row-span-1 p-8 py-16 bg-background-light rounded-lg flex flex-row gap-4">
                        <div>
                            <h3 className="text-4xl font-display font-bold">Project Cards</h3>
                            <p>Instantly make READMEs stand out.</p>
                        </div>

                        <div className="relative h-full w-1/2">
                            <Image src="/home/project-cards.svg" fill className="object-contain" style={{
                                transform: "perspective(1000px) rotateY(30deg) rotateX(10deg)",
                                filter: "drop-shadow(-5px 5px 10px rgba(70, 0, 200, 0.5))"
                            }} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default ProjectsSection;