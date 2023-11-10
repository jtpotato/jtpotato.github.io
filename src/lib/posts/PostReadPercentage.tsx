"use client";

import { useEffect, useState } from "react";

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
      <p>{readPercentage.toFixed(0)}% Read</p>
    </>
  );
}

export default PostReadPercentage;
