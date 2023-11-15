import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

function Projects() {
  return (
    <>
      <div className="w-full flex justify-center items-center p-4 md:py-8">
        <div className="max-w-2xl w-full">
          <h1 className="font-bold text-4xl">Projects</h1>
          <hr className="border-lines mt-4 mb-8"/>
          <Link href="/projects/firetrace">
            <div className="flex items-center space-x-2">
              <p className="text-2xl font-bold">Firetrace</p>
              <ArrowUpRight />
            </div>
          </Link>
          <p className="text-neutral-400">Bushfire prediction AI.</p>
        </div>
      </div>
    </>
  );
}

export default Projects;
