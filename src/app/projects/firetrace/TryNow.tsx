import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

function TryNow() {
  return (
    <div className="w-full flex justify-center my-16">
      <Link
        href="https://jtpotato-firetrace.hf.space/"
        target="_blank noreferrer"
      >
        <button className="text-[#ffa202] flex items-center space-x-2">
          <p>Try Now</p>
          <ArrowUpRight />
        </button>
      </Link>
    </div>
  );
}

export default TryNow;
