import getLikedSongs from "@/actions/getLikedSong";
import LikedItems from "@/components/likedSongs/LikedSongs";
import Image from "next/image";

export const revalidate = 0;

async function LikedSong() {
  const songs = await getLikedSongs();

  return (
    <div className="bg-neutral-900 px-6 mt-5">
      <div className="md:flex-row gap-x-5 flex flex-col items-center">
        <div className="lg:h-44 lg:w-44 relative w-32 h-32">
          <Image
            src="/image/liked.webp"
            alt="Liked songs"
            fill
            className="object-cover"
          />
        </div>
        <div className=" gap-y-2 md:mt-0 flex flex-col mt-4">
          <p className="md:block hidden text-sm font-semibold">Playlist</p>
          <h1 className="sm:text-5xl lg:text-6xl text-4xl font-bold text-white">
            Liked songs
          </h1>
        </div>
      </div>
      <LikedItems songs={songs} />
    </div>
  );
}

export default LikedSong;
