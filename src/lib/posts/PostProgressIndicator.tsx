"use client";

import { useEffect, useState } from "react";

function PostProgressIndicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // on scroll, check how far down the page we are
    const onScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      console.log(scrolled)
      setProgress(scrolled);
    } 

    window.addEventListener("scroll", onScroll);
  }, [])

  return (
    <>
      <div className="w-full">
        <div className={`bg-accent`} style={{ "height": "2px", "width": `${progress}%` }}></div>
      </div>
    </>
  );
}

export default PostProgressIndicator;
