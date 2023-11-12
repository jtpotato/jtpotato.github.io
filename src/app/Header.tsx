"use client";

import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

function Header() {
  function goBack() {
    window.history.back();
  }

  return (
    <>
      <div className="">
        <header className="w-screen fixed top-0 left-0 flex justify-center p-4 backdrop-blur-md border-b border-lines/10">
          <Link href="/">
            <Home />
          </Link>
        </header>
      </div>
    </>
  );
}

export default Header;
