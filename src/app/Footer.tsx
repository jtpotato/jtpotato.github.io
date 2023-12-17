import BobaLink from "@/lib/boba-ui/link/BobaLink";
import dayjs from "dayjs";
import Link from "next/link";
import { useEffect, useState } from "react";

function Footer() {
    const [timeZone, setTimeZone] = useState("");
    const [hoursAhead, setHoursAhead] = useState("");
    const [myTime, setMyTime] = useState("");

    useEffect(() => {
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setTimeZone(timeZone);

        const dateInTheirTimezone = new Date().toLocaleString("en-US", { timeZone });
        const dateInMyTimezone = new Date().toLocaleString("en-US", { timeZone: "Australia/Melbourne" });

        const dayjsDateInTheirTimezone = dayjs(dateInTheirTimezone);
        const dayjsDateInMyTimezone = dayjs(dateInMyTimezone);
        const difference = dayjsDateInTheirTimezone.diff(dayjsDateInMyTimezone, "hour");

        if (difference > 0) {
            setHoursAhead(`${difference} hours ahead!`);
        }
        else if (difference < 0) {
            setHoursAhead(`${Math.abs(difference)} hours behind!`);
        }
        else {
            setHoursAhead("the same time! What a coincidence :D");
        }

        const loopToSetTime = setInterval(() => {
            setMyTime(dayjs().format("HH:mm:ss"));
        }, 1000)

        return () => {
            clearInterval(loopToSetTime);
        }
    }, [])

    return (<>
        <div className="text-text-dark font-body p-16 relative">
            <div className="grid grid-cols-4">
                <div>
                    <h3 className="text-xl font-display font-bold text-text-secondary-dark">Contact</h3>
                    <div className="ml-4">
                        <Link href={"https://instagram.com/jtpotato_"} target="_blank">
                            <BobaLink>
                                Instagram
                            </BobaLink>
                        </Link>
                        <Link href={"https://www.threads.net/@jtpotato_"} target="_blank">
                            <BobaLink>
                                Threads
                            </BobaLink>
                        </Link>
                        <Link href={""} target="_blank">
                            <BobaLink disabled>
                                Contact Form
                            </BobaLink>
                        </Link>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-display font-bold text-text-secondary-dark">Also See</h3>
                    <div className="ml-4">
                        <Link href={"/posts"} target="_blank">
                            <BobaLink>
                                Blog
                            </BobaLink>
                        </Link>
                        <Link href={"https://youtube.com/@jtpotato"} target="_blank">
                            <BobaLink>
                                YouTube
                            </BobaLink>
                        </Link>
                        <Link href={"https://github.com/jtpotato"} target="_blank">
                            <BobaLink>
                                GitHub
                            </BobaLink>
                        </Link>
                        <Link href={"https://replit.com/@JTpotato"} target="_blank">
                            <BobaLink>
                                Replit
                            </BobaLink>
                        </Link>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-display font-bold text-text-secondary-dark">Projects</h3>
                    <div className="ml-4">
                        <Link href={""} target="_blank">
                            <BobaLink>
                                Full projects list
                            </BobaLink>
                        </Link>
                        <Link href={"/projects/firetrace"} target="_blank">
                            <BobaLink>
                                Firetrace
                            </BobaLink>
                        </Link>
                        <Link href={"/projects/project-cards"} target="_blank">
                            <BobaLink>
                                Project Cards
                            </BobaLink>
                        </Link>
                        <Link href={""} target="_blank">
                            <BobaLink disabled>
                                Rhythm Game
                            </BobaLink>
                        </Link>
                        <Link href={""} target="_blank">
                            <BobaLink disabled>
                                Buer
                            </BobaLink>
                        </Link>
                        <Link href={""} target="_blank">
                            <BobaLink disabled>
                                Boba UI
                            </BobaLink>
                        </Link>
                    </div>
                </div>
                <div>
                    <p>Your Timezone is <strong>{timeZone}</strong></p>
                    <p>That&apos;s <strong>{hoursAhead}</strong></p>
                    <p>My time: {myTime}</p>
                </div>
            </div>
            <div className="absolute bottom-4 left-0 m-auto w-full">
                <p className="text-center">
                    Made by jtpotato with Next.js, TailwindCSS, Framer Motion, procrastination-induced dread and bubble tea 🧋
                </p>
            </div>

        </div>
    </>);
}

export default Footer;