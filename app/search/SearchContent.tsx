"use client";

import MediaItem from "@/components/leftSideBar/MediaItem";
import PlayButton from "@/components/pageContent/PlayButton";
import { Song } from "@/types/types";

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
            className="gap-x-4 group relative flex items-center w-full"
          >
            <div className="flex-1">
              <MediaItem onClick={() => {}} data={song} />
            </div>
            {/* Add like button */}
          </div>
        );
      })}
    </div>
  );
}

export default SearchContent;
