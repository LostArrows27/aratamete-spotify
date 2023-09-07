"use client";

import { useUser } from "@/hooks/useUser";
import { Song } from "@/types/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import MediaItem from "../leftSideBar/MediaItem";
import LikeButton from "../search/LikeButton";

type LikedItemsProps = {
  songs: Song[];
};

function LikedItems({ songs }: LikedItemsProps) {
  const router = useRouter();

  const { user, isLoading } = useUser();

  useEffect(() => {
    if (isLoading && !user) {
      router.replace("/");
    }
  }, [isLoading, user, router]);

  if (songs.length === 0)
    return (
      <div className="gap-y-2 text-neutral-400 flex flex-col w-full mt-6">
        No liked songs
      </div>
    );
  return (
    <div className="gap-y-2 flex flex-col w-full py-6">
      {songs.map((item: Song) => {
        return (
          <div className=" gap-x-4 flex items-center w-full" key={item.id}>
            <div className="flex-1">
              <MediaItem onClick={() => {}} data={item} />
            </div>
            <LikeButton songID={item.id} />
          </div>
        );
      })}
    </div>
  );
}

export default LikedItems;
