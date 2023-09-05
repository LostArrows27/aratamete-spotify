import { cn } from "@/lib/cn";
import Button from "./Button";
import useAuthModel from "@/hooks/useAuthModal";
import { FaUserAlt } from "react-icons/fa";
import Navigation from "./Navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

type HeadersProp = {
  children: React.ReactNode;
  className?: string;
};

async function Headers({ children, className }: HeadersProp) {
  const {
    data: { user },
    error,
  } = await createServerComponentClient({ cookies }).auth.getUser();

  return (
    <header className={cn("h-fit", className)}>
      <div className="flex px-6 py-2 bg-gradient-to-b from-emerald-800 to-transparent items-center justify-between w-full mb-4 sticky top-0 left-0 right-0 h-[90px]">
        <Navigation />
        <div className="gap-x-4 flex items-center justify-between">
          {user ? (
            <div className="gap-x-4 flex items-center">
              <LogoutButton />
              <button className="disabled:cursor-not-allowed disabled:opacity-75 hover:opacity-75 w-full px-3 py-3 font-bold text-black transition bg-green-500 border-transparent rounded-full">
                <FaUserAlt />
              </button>
            </div>
          ) : (
            <LoginButton />
          )}
        </div>
      </div>
      {children}
    </header>
  );
}

export default Headers;
