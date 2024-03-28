import { HTMLAttributes, PropsWithChildren, ReactNode } from "react";

function Card(props: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  // border-black/10 border rounded-lg bg-gradient-to-br from-white/10 to-black/10 px-2 p-1
  return (
    <>
      <div
        className="rounded-lg border border-black/10 bg-gradient-to-br from-white/10 to-black/10 p-4"
        {...props}
      >
        {props.children}
      </div>
    </>
  );
}

export default Card;
