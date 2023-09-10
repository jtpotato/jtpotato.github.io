/* eslint-disable react/no-unescaped-entities */

import Card from "@/boba-components/Card";
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

function Home() {
  return (
    <>
      <div className="p-4">
        <MajorSegment image={<></>} imageFirst={false}>
          <h1 className="text-6xl font-bold">Hi!</h1>
          <div>
            <h2 className="inline">I'm </h2>
            <Underline>
              <h2 className="inline">
                <ClickSwitch />
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
        <div className="h-4"></div>
        <MajorSegment image={<div className="w-1/2"></div>} imageFirst={true}>
          <div className="text-lg">
            <p>
              There are very few reasons to be here, but since you're here
              anyways...
              <br />
              <br />
              Most of my work focuses on small, interesting projects that try to
              do something in a new way (incorrectly).
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
              <a href="https://github.com/jtpotato/scuffed-instrument" target="_blank">
                <Chip text="Musical Instrument with Arduino" />
              </a>
              <a href="https://github.com/jtpotato/autocut" target="_blank">
                <Chip text="Yet Another CLI Abstraction Layer" />
              </a>
            </Row>
          </div>
        </MajorSegment>
        <MajorSegment image={<div className="w-1/2"></div>} imageFirst={false}>
          <h2>Under Construction</h2>
          <p>
            This site will be quite empty for now... Maybe check back later?
          </p>
        </MajorSegment>
      </div>
    </>
  );
}

export default Home;
