"use client";

import { useEffect, useState } from "react";

function clamp(val: number, min: number, max: number) {
  return val > max ? max : val < min ? min : val;
}


function PostReadPercentage({ slug }: { slug: string }) {
  const [readPercentage, setReadPercentage] = useState(0);

  // read percentage from localstorage item
  useEffect(() => {
    const localstoragePercentage = localStorage.getItem(`post-read-${slug}`);

    if (localstoragePercentage) {
      setReadPercentage(Number(localstoragePercentage));
    } else {
      localStorage.setItem(`post-read-${slug}`, "0");
    }
  }, []);
  return (
    <>
      <p>{clamp(readPercentage, 0, 100).toFixed(0)}% Read</p>
    </>
  );
}

export default PostReadPercentage;
