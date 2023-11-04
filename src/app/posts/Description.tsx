import React from "react";

function Description({children}: React.PropsWithChildren) {
  return (
    <p
      style={{
        // maxWidth: "50ch",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
      }}

      className="text-gray-500"
    >
        {children}
    </p>
  );
}

export default Description;
