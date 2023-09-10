// Essentially the chip component

import { PropsWithChildren, ReactNode } from "react";

type CardProps = {
  logo?: ReactNode;
};

function Card(props: PropsWithChildren<CardProps>) {
  return (
    <>
      <div className="flex flex-row items-center justify-center rounded-3xl bg-white/5 border border-white/50 w-fit h-fit space-x-1 p-4">
        {props.logo ? props.logo : <></>}
        <div>{props.children}</div>
      </div>
    </>
  );
}

export default Card;
