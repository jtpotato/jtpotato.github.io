import { HTMLProps } from "react";

function FuzzyCard(props: HTMLProps<HTMLDivElement>) {
  return (<>
    <div className="bg-[url('/home/noise.svg')] rounded-xl border border-white/30 bg-neutral-400/5 h-full">
      { props.children }
    </div>
  </>);
}

export default FuzzyCard;