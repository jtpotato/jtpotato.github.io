/* eslint-disable react/no-unescaped-entities */

import Chip from "@/boba-components/Chip";
import ClickSwitch from "@/boba-components/ClickSwitch";
import MajorSegment from "@/boba-components/MajorSegment";
import Row from "@/boba-components/Row";
import Underline from "@/boba-components/Underline";
import { MdCode, MdOutlineLocationOn } from "react-icons/md";
import { PiPencilSimple } from "react-icons/pi";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { GrGithub } from "react-icons/gr";
import { SiThreads } from "react-icons/si";
import Center from "@/boba-components/Center";
import BentoRow from "@/boba-components/BentoRow";
import GlitchyTextOnScroll from "@/boba-components/GlitchyTextOnScroll";

function Home() {
  return (
    <>
      <div className="p-4 flex flex-col gap-4">
        <BentoRow>
          <MajorSegment image={<></>} imageFirst={false}>
            <div>
              <h1 className="text-6xl">Hi!</h1>
              <h2 className="inline">I'm </h2>
              <Underline>
                <h2 className="inline">
                  <ClickSwitch a={"Joel"} b={"奕諴"} />
                </h2>
              </Underline>
              <h2 className="inline">.</h2>
              <div className="h-4"></div>
              <Row>
                <Chip
                  text="Melbourne, AU"
                  logo={
                    <span className="text-md">
                      <MdOutlineLocationOn />
                    </span>
                  }
                />
                <Chip
                  text="Developer"
                  logo={
                    <span className="text-md">
                      <MdCode />
                    </span>
                  }
                />
                <Chip
                  text="Student"
                  logo={
                    <span className="text-sm">
                      <PiPencilSimple />
                    </span>
                  }
                />
              </Row>
            </div>
          </MajorSegment>

          <MajorSegment image={<></>} imageFirst={true}>
            <div>
              <h2>About Me</h2>
              <p>
                Coding since 2015. I make silly things and do stuff with
                computers. I happen to touch a non-zero amount of grass per
                year.
              </p>
              <br />
              <p className="text-xs italic">
                and if you haven't already, click my name. it does do something.
              </p>
            </div>
          </MajorSegment>
        </BentoRow>
        <Center>
          <Row>
            <a href="https://www.youtube.com/@jtpotato" target="_blank">
              <Chip
                text="YouTube"
                logo={
                  <span className="">
                    <AiOutlineYoutube />
                  </span>
                }
              />
            </a>
            <a href="https://github.com/jtpotato" target="_blank">
              <Chip
                text="GitHub"
                logo={
                  <span className="">
                    <GrGithub />
                  </span>
                }
              />
            </a>
            <a href="https://www.instagram.com/jtpotato_/" target="_blank">
              <Chip
                text="Instagram"
                logo={
                  <span className="">
                    <AiOutlineInstagram />
                  </span>
                }
              />
            </a>
            <a href="https://www.threads.net/@jtpotato_" target="_blank">
              <Chip
                text="Threads"
                logo={
                  <span className="text-sm">
                    <SiThreads />
                  </span>
                }
              />
            </a>
          </Row>
        </Center>

        <BentoRow>
          <MajorSegment image={<></>} imageFirst={true}>
            <div className="">
              <p className="mb-1">
                I have many small projects that explore different, novel ways of
                making things. There are probably very good reasons why things
                aren't done the way I do them, but if it half-works, that's all
                that matters, right?
                <br />
                <br />
                Examples:
              </p>
              <Row>
                <a
                  href="https://github.com/jtpotato/language-model"
                  target="_blank"
                >
                  <Chip text="Improvised ChatGPT with a Markov Chain" />
                </a>
                <a
                  href="https://github.com/jtpotato/scuffed-instrument"
                  target="_blank"
                >
                  <Chip text="Musical Instrument with Arduino" />
                </a>
                <a href="https://github.com/jtpotato/autocut" target="_blank">
                  <Chip text="Yet Another CLI Abstraction Layer" />
                </a>
              </Row>
            </div>
          </MajorSegment>
        </BentoRow>

        <BentoRow>
          <div className="relative">
            <MajorSegment image={<></>} imageFirst={false}>
              <GlitchyTextOnScroll />
              <div>
                <h2>Tech Stack</h2>
                <p>
                  This site uses Next.js, along with a custom-made UI toolkit
                  for super efficient prototyping. This is currently deployed on
                  GitHub Pages - because out of all the free hosting services,
                  GitHub's domain name is the most acceptable... I am not
                  affording my own domain in this economy 😭
                  <br />
                  <br />
                </p>
                <span>
                  Follow the development of{"  "}
                  <a href="https://github.com/jtpotato/boba-ui" target="_blank">
                    <Chip text={"boba-ui"} />
                  </a>
                </span>
              </div>
            </MajorSegment>
          </div>

          <MajorSegment image={<></>} imageFirst={false}>
            <div className="">
              <h2>Under Construction</h2>
              <p>
                This site will be quite empty for now... Maybe check back later?
              </p>
            </div>
          </MajorSegment>
        </BentoRow>
      </div>
    </>
  );
}

export default Home;
