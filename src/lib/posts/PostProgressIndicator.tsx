"use client";

import { useEffect, useState } from "react";

function PostProgressIndicator({ slug }: { slug: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // on scroll, check how far down the page we are
    const onScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      console.log(scrolled)
      setProgress(scrolled);
      if (scrolled > Number(localStorage.getItem(`post-read-${slug}`))) {
        console.log(scrolled)
        localStorage.setItem(`post-read-${slug}`, String(scrolled));
      }
    }

    window.addEventListener("scroll", onScroll);

    // clean up event listener
    return () => window.removeEventListener("scroll", onScroll);
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
