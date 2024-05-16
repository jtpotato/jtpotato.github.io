import Card from "@/lib/components/Card";
import { HTMLAttributes } from "react";

interface HighlightProps extends HTMLAttributes<HTMLAnchorElement> {
  repoURL: string;
}

function RepoHighlight(props: HighlightProps) {
  const { repoURL, ...passProps } = props;
  const repoName = repoURL.split("/").slice(-2).join("/");
  return (
    <>
      <a href={repoURL} target="_blank" {...passProps}>
        <Card>{repoName}</Card>
      </a>
    </>
  );
}

export default RepoHighlight;
