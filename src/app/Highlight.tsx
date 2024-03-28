import Card from "@/lib/components/Card";
import { HTMLAttributes } from "react";

interface HighlightProps extends HTMLAttributes<HTMLAnchorElement> {
  repoURL: string;
}

function Highlight(props: HighlightProps) {
  const repoURL = props.repoURL;
  const repoName = repoURL.split("/").slice(-2).join("/");
  return (
    <>
      <a href={repoURL} target="_blank" {...props}>
        <Card>{repoName}</Card>
      </a>
    </>
  );
}

export default Highlight;
