"use client";

import shader from "./background.frag";
// @ts-ignore
import ShaderCanvas from "@signal-noise/react-shader-canvas";

function Background() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <>
      {/* <ShadertoyReact fs={shader} /> */}
      <div className="w-screen h-screen overflow-clip -z-50 fixed top-0 left-0">
        <ShaderCanvas
          width={width * 1.5}
          height={height * 1.5}
          fragShader={shader}
        />
      </div>
    </>
  );
}

export default Background;
