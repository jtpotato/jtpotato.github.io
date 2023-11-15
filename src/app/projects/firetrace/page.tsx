import "./firetrace.css";
import FiretraceHomePage from "./FiretraceHomePage";

export const metadata = {
  title: "Firetrace | Simple continental-scale bushfire model",
  description:
    "Firetrace is an AI model designed to predict the severity of Australian bushfires across the entire continent in a simple and easy to use manner.",
  image:
    "https://raw.githubusercontent.com/jtpotato/firetrace/main/assets/banner.svg",
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
