"use client";

import { cn } from "@/lib/cn";
import { useRouter } from "next/navigation";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";

type HeadersProp = {
  children: React.ReactNode;
  className?: string;
};

function Headers({ children, className }: HeadersProp) {
  const router = useRouter();

  const logout = () => {};

  return (
    <header className={cn("h-fit", className)}>
      <div className="flex px-6 py-2 bg-gradient-to-b from-emerald-800 to-transparent items-center justify-between w-full mb-4 sticky top-0 left-0 right-0 h-[90px]">
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
            onClick={() => router.push("/")}
            className="hover:opacity-75 flex items-center justify-between p-2 transition bg-white rounded-full"
          >
            <BiSearch size={20} className="text-black" />
          </button>
        </nav>
        <div className="gap-x-4 flex items-center justify-between">
          <>
            <div>
              <Button
                onClick={() => {}}
                className="text-neutral-300 font-medium bg-transparent"
              >
                Sign In
              </Button>
            </div>
            <div>
              <Button
                onClick={() => {}}
                className="px-6 py-2 font-medium bg-white"
              >
                Log In
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </header>
  );
}

export default Headers;
