function ProjectsSection() {
    return (<>
        <div className="bg-background-dark p-8 font-body text-lg">
            <div className="max-w-4xl m-auto">
                <h2 className="text-6xl font-display font-bold text-text-dark">Projects</h2>
                <div className="grid grid-cols-3 my-8">
                    <div className="col-span-2 row-span-1 p-4 bg-background-light rounded-lg">
                        <h3 className="text-4xl font-display font-bold">Project Cards</h3>
                        <p>Instantly make READMEs stand out.</p>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default ProjectsSection;