import BobaChip from "@/lib/boba-ui/chip/BobaChip";
import { animate, m, LazyMotion, domAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";

function NameCard() {
  function scrollDown() {
    animate(0, window.innerHeight, {
      duration: 1,
      ease: "easeInOut",
      onUpdate: (value) => {
        window.scrollTo(0, value)
      }
    })
  }

  return (<>
    <LazyMotion features={domAnimation}>
      <div className="flex justify-center items-center h-screen relative font-body text-text-primary">
        <div>
          <m.p className="text-8xl font-display font-bold"
            initial={{
              y: 50,
              opacity: 0
            }}
            animate={{
              y: 0,
              opacity: 1
            }}
            transition={{
              duration: 0.5,
              delay: 0
            }}
          >
            I&apos;m Joel
          </m.p>
          <div className="flex flex-row gap-4 items-center mt-4 text-text-secondary">
            <BobaChip className="border-text-secondary-dark">Developer</BobaChip>
            <BobaChip className="border-text-secondary-dark">Melbourne &bull; Australia</BobaChip>
          </div>

        </div>
        <div
          className="absolute bottom-16 flex flex-col items-center cursor-pointer gap-4"
          onClick={scrollDown}
        >
          <m.div
            animate={{ y: [-10, 10] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            style={{ willChange: "transform" }}
          >
            <p>Keep Scrolling</p>
          </m.div>
          <m.div
            animate={{ y: [-10, 10] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.3 }}
            style={{ willChange: "transform" }}>
            <GoChevronDown />
          </m.div>

        </div>
      </div>
    </LazyMotion>

  </>);
}

export default NameCard;