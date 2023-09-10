import { ReactNode } from "react";

type ChipProps = {
  logo?: ReactNode;
  text: string;
};

function Chip(props: ChipProps) {
  return (
    <>
      <div className="flex flex-row items-center justify-center rounded-full bg-white/5 border border-white/50 w-fit space-x-1 px-2 py-1 whitespace-nowrap">
        {props.logo ? props.logo : <></>}
        <span className="text-sm">{props.text}</span>
      </div>
    </>
  );
}

export default Chip;
