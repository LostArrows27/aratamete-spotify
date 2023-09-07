/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";

function UserAvatar({ src }: { src: string }) {
  const router = useRouter();

  return (
    <img
      onClick={() => router.push("/profile")}
      className="hover:opacity-75 w-11 h-11 rounded-full cursor-pointer"
      src={src}
      alt="user avatar"
    />
  );
}

export default UserAvatar;
