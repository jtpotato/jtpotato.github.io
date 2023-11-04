"use client"

import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

function Header() {
  function goBack() {
    window.history.back();
  }

  return (
    <>
      <div className="">
        <header className="w-screen flex flex-col items-center">
          <div className="p-6 rounded-md flex flex-row justify-evenly max-w-lg w-full">
            <button onClick={goBack}>
              <ArrowLeft />
            </button>
            <Link href="/">
              <Home />
            </Link>
          </div>
          <div className="h-[1px] bg-white/20 max-w-3xl w-full"></div>
        </header>
      </div>
    </>
  );
}

export default Header;
