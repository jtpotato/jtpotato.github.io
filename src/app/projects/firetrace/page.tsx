import { Metadata } from "next";
import "./firetrace.css";
import FiretraceHomePage from "./FiretraceHomePage";

export const metadata: Metadata = {
  title: "Firetrace | Simple continental-scale bushfire model",
  description:
    "An AI model designed to predict the severity of Australian bushfires in a simple and easy to use manner.",
  openGraph: {
    title: "Firetrace | Simple continental-scale bushfire model",
    description:
      "An AI model designed to predict the severity of Australian bushfires in a simple and easy to use manner.",
    siteName: "Firetrace",
    images: [
      {
        url: "https://raw.githubusercontent.com/jtpotato/firetrace/main/assets/banner.svg",
      },
    ],
  },
};

function FiretraceHome() {
  return (
    <>
      <link
        rel="canonical"
        href="https://jtpotato.github.io/projects/firetrace/"
      />
      <FiretraceHomePage />
    </>
  );
}

export default FiretraceHome;
