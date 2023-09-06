"use client";

import { Song } from "@/types/types";
import SongItem from "./SongItem";

interface PageContentProps {
  songs: Song[];
}

function PageContent({ songs }: PageContentProps) {
  if (songs.length === 0) {
    return <div className="text-neutral-400 mt-4">No songs available !</div>;
  }

  return (
    <div className="sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 grid grid-cols-2 gap-4 mt-4">
      {songs.map((item: Song) => (
        <SongItem key={item.id} data={item} onClick={() => {}} />
      ))}
    </div>
  );
}

export default PageContent;
