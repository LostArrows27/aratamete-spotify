"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types/types";
import Image from "next/image";
import PlayButton from "./PlayButton";

interface SongItemProps {
  data: Song;
  onClick: (id: string) => void;
}

function SongItem({ data, onClick }: SongItemProps) {
  const imagePath = useLoadImage(data);

  return (
    <div
      onClick={() => onClick(data.id)}
      className="group gap-x-4 bg-neutral-400/5 hover:bg-neutral-400/10 relative flex flex-col items-center justify-center p-3 overflow-hidden transition rounded-md cursor-pointer"
    >
      <div className="aspect-square relative w-full h-full overflow-hidden rounded-md">
        <Image
          src={imagePath || "/image/liked.webp"}
          alt={data.title}
          className="object-cover"
          fill
        />
      </div>
      <div className="gap-y-1 flex flex-col items-start w-full pt-4">
        <p className=" w-full font-semibold truncate">{data.title}</p>
        <p className="text-neutral-400 w-full pb-4 text-sm truncate">
          By {data.author}
        </p>
      </div>
      <div className="bottom-24 right-5 absolute">
        <PlayButton />
      </div>
    </div>
  );
}

export default SongItem;
