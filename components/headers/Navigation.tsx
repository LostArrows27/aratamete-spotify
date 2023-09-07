"use client";

import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

function Navigation() {
  const router = useRouter();

  return (
    <>
      {/*  Not mobile navigation */}
      <nav className="md:flex gap-x-2 items-center hidden">
        <button
          onClick={() => router.back()}
          className="hover:opacity-75 items-center justify-center transition bg-black rounded-full"
        >
          <RxCaretLeft size={35} className="text-white" />
        </button>
        <button
          onClick={() => router.forward()}
          className="hover:opacity-75 items-center justify-center transition bg-black rounded-full"
        >
          <RxCaretRight size={35} className="text-white" />
        </button>
      </nav>
      {/* Mobile navigation */}
      <nav className="md:hidden gap-x-2 flex items-center">
        <button
          onClick={() => router.push("/")}
          className="hover:opacity-75 flex items-center justify-between p-2 transition bg-white rounded-full"
        >
          <HiHome size={20} className="text-black" />
        </button>
        <button
          onClick={() => router.push("/search")}
          className="hover:opacity-75 flex items-center justify-between p-2 transition bg-white rounded-full"
        >
          <BiSearch size={20} className="text-black" />
        </button>
      </nav>
    </>
  );
}

export default Navigation;
