import { Song } from "@/types/types";
import usePlayer from "./usePlayer";
import useAuthModel from "./useAuthModal";
import { useUser } from "./useUser";

export default function useOnPlay(songs: Song[]) {
  const player = usePlayer();

  const authModel = useAuthModel();

  const { user } = useUser();

  const onPlay = (songID: string) => {
    if (!user) {
      return authModel.onOpen();
    }
    player.setID(songID);
    player.setIDs(songs.map((song) => song.id));
  };

  return onPlay;
}
