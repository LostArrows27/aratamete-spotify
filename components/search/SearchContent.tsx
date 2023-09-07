"use client";

import MediaItem from "@/components/leftSideBar/MediaItem";
import { Song } from "@/types/types";
import LikeButton from "./LikeButton";

interface SearchContentProps {
  songs: Song[];
}

function SearchContent({ songs }: SearchContentProps) {
  if (songs.length === 0) {
    return (
      <div className="gap-y-2 text-neutral-400 flex flex-col w-full px-6">
        No song found!
      </div>
    );
  }

  return (
    <div className="gap-y-2 flex flex-col w-full px-6">
      {songs.map((song: Song) => {
        return (
          <div
            key={song.id}
            className="gap-x-4 group hover:bg-neutral-800 relative flex items-center w-full pr-3 rounded-md"
          >
            <div className="flex-1">
              <MediaItem onClick={() => {}} data={song} />
            </div>
            <LikeButton songID={song.id} />
          </div>
        );
      })}
    </div>
  );
}

export default SearchContent;
