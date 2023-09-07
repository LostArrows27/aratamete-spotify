"use client";

import useGetSongByID from "@/hooks/useGetSongByID";
import useLoadSongURL from "@/hooks/useLoadSongURL";
import usePlayer from "@/hooks/usePlayer";
import { shallow } from "zustand/shallow";
import PlayerContent from "./PlayerContent";

function Player() {
  const player = usePlayer((state) => state, shallow);

  const { song } = useGetSongByID(player.activeID);

  const songUrl = useLoadSongURL(song);

  if (!song || !songUrl || !player.activeID) {
    return null;
  }

  return (
    <div className="fixed bottom-0 w-full py-2 h-[80px] bg-black px-4">
      <PlayerContent key={songUrl} song={song} songURL={songUrl} />
    </div>
  );
}

export default Player;
