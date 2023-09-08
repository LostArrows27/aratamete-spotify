/* eslint-disable @next/next/no-img-element */
"use client";

import getUserName from "@/actions/getUserName";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Profile() {
  const { user } = useUser();

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      return router.push("/");
    }

    console.log(user);
  }, [router, user]);

  return (
    <section className="px-6 py-1 h-[calc(100vh-400px)]">
      <h1 className="text-3xl font-semibold text-white mb-24">
        User Information
      </h1>
      <div className="flex flex-col-reverse items-center lg:flex-row h-full">
        <div className="flex-1 text-neutral-400 flex flex-col gap-y-8 mt-8 lg:mt-0 md:w-[500px] w-[100%]">
          <div className="flex flex-1 justify-between text-lg lg:text-xl">
            <div>Username:</div>
            <div>{getUserName(user?.user_metadata)}</div>
          </div>
          <div className="flex flex-1 justify-between text-lg lg:text-xl">
            <div>Email:</div>
            <div>{user?.email}</div>
          </div>
        </div>
        <div className="lg:h-full h-[200px] grid place-items-center flex-1 md:mb-8">
          <img
            src={user?.user_metadata.avatar_url}
            alt="image"
            className="rounded-full w-[200px] h-[200px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
