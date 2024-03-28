"use client"

import { useState } from "react";

function ProjectCards() {
  const [name, setName] = useState("")
  const [codename, setCodename] = useState("")
  const [date, setDate] = useState("")

  function createURL(
    projectName: string,
    projectCodename: string,
    projectStarted: string
  ) {
    return new URL(
      `https://project-cards.jtpotatodev.workers.dev/?project=${projectName}&started=${projectStarted}&codename=${projectCodename}`
    ).toString();
  }

  return (<>
    <div className="w-full h-screen flex items-center justify-center">
      <div>
        <h1 className="text-6xl mb-8">Project Cards</h1>
        <div className="flex gap-4 [&>*]:flex [&>*]:flex-col">
          <div>
            <label>Name</label>
            <input type="text" onChange={e => setName(e.target.value)}></input>
          </div>
          <div>
            <label>Codename</label>
            <input type="text" onChange={e => setCodename(e.target.value)}></input>
          </div>
          <div>
            <label>Date Started</label>
            <input type="date" onChange={e => setDate(new Date(e.currentTarget.value).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            }))}></input>
          </div>
        </div>
        <p className="font-mono mt-8 rounded-lg bg-gradient-to-br from-neutral-700 to-black p-4 py-2 text-white">{createURL(name, codename, date)}</p>
      </div>
    </div>
  </>);
}

export default ProjectCards;