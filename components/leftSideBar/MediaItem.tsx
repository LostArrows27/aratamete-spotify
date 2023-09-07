"use client";

import useLoadImage from "@/hooks/useLoadImage";
import usePlayer from "@/hooks/usePlayer";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types/types";
import Image from "next/image";

interface MediaItemProps {
  data: Song;
  onClick?: (id: string) => void;
}

function MediaItem({ data, onClick }: MediaItemProps) {
  const imageURL = useLoadImage(data);

  const player = usePlayer();

  const { user } = useUser();

  const handleClick = () => {
    if (!user || !player || !data) return;

    player.setID(data.id);

    // turn on player
  };

  return (
    <div
      onClick={handleClick}
      className="gap-x-3 hover:bg-neutral-800/50 flex items-center w-full p-2 rounded-md cursor-pointer"
    >
      <div className="min-h-[48px] min-w-[48px] relative rounded-md overflow-hidden">
        <Image
          fill
          src={imageURL || "/image/liked.webp"}
          alt={data.title}
          className="object-cover"
        />
      </div>
      <div className="gap-y-1 flex flex-col overflow-hidden">
        <p className="text-white truncate">{data.title}</p>
        <p className="text-neutral-400 text-sm truncate">{data.author}</p>
      </div>
    </div>
  );
}

export default MediaItem;
