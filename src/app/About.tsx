import useHomeStore from "@/lib/home/HomeStore"
import { useInView } from "framer-motion"
import { useEffect, useRef } from "react"

function AboutSection() {
  const aboutRef = useRef(null)
  const isInView = useInView(aboutRef, { amount: "all" })
  const setTheme = useHomeStore(state => state.setTheme)

  useEffect(() => {
    if (isInView) {
      console.log("About Theme")
      setTheme("about")
    }
  }, [isInView])

  return (<>
    <div className="p-4 pt-8 text-lg font-body text-text-primary" ref={aboutRef}>
      <div className="flex flex-col gap-y-4 max-w-4xl m-auto">
        <h2 className="text-6xl font-display font-bold">About</h2>
        <div ref={aboutRef} />
        <p>I&apos;m a high school student (VCE 😰), developer and a content creator based in Melbourne, Australia.</p>
        <p>My programming journey started in 2015 with a 3 day gamedev program. Nearly 10 years later, I&apos;m still coding somehow, working on more advanced and impactful projects than ever before.</p>
        <p>Creating personal projects has allowed me to build familiarity with many technologies in various areas of software engineering, such as the web, mobile, mixed reality and artificial intelligence 🤓</p>
      </div>
    </div>
  </>);
}

export default AboutSection;