import React from "react";

import "./Underline.css";

function Underline(props: React.PropsWithChildren<{}>) {
  return (
    <>
      <span className="boba-underline">
        {props.children}
      </span>
    </>
  );
}

export default Underline;
