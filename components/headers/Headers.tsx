/* eslint-disable @next/next/no-img-element */

import { cn } from "@/lib/cn";
import { FaUserAlt } from "react-icons/fa";
import Navigation from "./Navigation";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import UserAvatar from "./UserAvatar";

type HeadersProp = {
  className?: string;
};

async function Headers({ className }: HeadersProp) {
  const {
    data: { user },
    error,
  } = await createServerComponentClient({ cookies }).auth.getUser();

  if (error) {
    console.log(error);
  }

  return (
    <header className={cn("h-fit", className)}>
      <div className="h-[calc(100%-80px)] hidden"></div>
      <div className="flex px-6 py-2 bg-gradient-to-b from-emerald-800 to-transparent items-center justify-between w-full mb-4 sticky top-0 left-0 right-0 h-[90px]">
        <Navigation />
        <div className="gap-x-4 flex items-center justify-between">
          {user ? (
            <div className="gap-x-4 flex items-center">
              <LogoutButton />
              {user?.user_metadata.avatar_url ? (
                <UserAvatar src={user?.user_metadata.avatar_url} />
              ) : (
                <button className="disabled:cursor-not-allowed disabled:opacity-75 hover:opacity-75 w-full px-3 py-3 font-bold text-black transition bg-green-500 border-transparent rounded-full">
                  <FaUserAlt />
                </button>
              )}
            </div>
          ) : (
            <LoginButton />
          )}
        </div>
      </div>
    </header>
  );
}

export default Headers;

export const dynamic = "force-dynamic";
