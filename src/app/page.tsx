import { Metadata } from "next";
import HomePage from "./HomePage";

export const metadata: Metadata = {
  title: 'jtpotato',
  description: 'Hi - I\'m Joel, a student, developer and content creator based in Melbourne, Australia.',
}

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  )
}
