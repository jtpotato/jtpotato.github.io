import Link from "next/link";

function Socials() {
  const socialsList = {
    "Blog 📄": "/posts",
    "Threads 🧵": "https://www.threads.net/@jtpotato_",
    "YouTube": "https://youtube.com/@jtpotato",
    "GitHub 🤓": "https://github.com/jtpotato"
  }  

  return (<>
    <div className="max-w-[1000px] m-auto my-32">
      <h2>Socials</h2>
      <p>Or other links.</p>
      <br/>
      <div className="flex gap-4">
        {
          Object.entries(socialsList).map((entry) => (
            <Link href={entry[1]} target="_blank" className="bg-[#ecd2a832] text-[#ecd2a8] w-fit px-4 py-2 rounded-full">{entry[0]}</Link>
          ))
        }
      </div>
    </div>
  </>);
}

export default Socials;