import { HTMLAttributes, PropsWithChildren, ReactNode } from "react";

function Card(props: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  // border-black/10 border rounded-lg bg-gradient-to-br from-white/10 to-black/10 px-2 p-1
  return (
    <>
      <div
        className="rounded-lg border border-black/10 p-4 shadow-sm transition-all duration-200 hover:shadow-md"
        {...props}
      >
        {props.children}
      </div>
    </>
  );
}

export default Card;
