"use client";

import ProjectCardMaker from "./ProjectCardMaker";
import "./project-cards.css";
import { motion, useScroll } from "framer-motion";

function ProjectCards() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      ></link>
      <div className="p-8 h-screen">
        <div className="w-full h-full flex">
          <div className="w-full h-full flex justify-center flex-col flex-1">
            <p className="ml-1">Introducing...</p>
            <h1 className="text-6xl font-bold">Project Cards ✨</h1>
          </div>
          <div className="w-full h-full flex justify-center flex-col flex-1 space-y-16">
            <div>
              <p className="text-xl font-semibold">They look a bit like this.</p>
              <img src="https://project-cards.jtpotatodev.workers.dev/?project=jtpotato/project-cards&started=2%20Dec%202023&codename=Alexandra"></img>
            </div>
            <div>
              <p className="text-xl font-semibold">Make one yourself</p>
              <ProjectCardMaker />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCards;
