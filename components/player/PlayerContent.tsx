"use client";

import { Song } from "@/types/types";
import LikeButton from "../search/LikeButton";
// @ts-ignore
import useSound from "use-sound";
import useLoadImage from "@/hooks/useLoadImage";
import Image from "next/image";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { HiSpeakerXMark, HiSpeakerWave } from "react-icons/hi2";
import Slider from "./Slider";
import usePlayer from "@/hooks/usePlayer";
import { useEffect, useState } from "react";

type PlayerContentProps = {
  song: Song;
  songURL: string;
};

function PlayerContent({ song, songURL }: PlayerContentProps) {
  const [volume, setVolume] = useState(1);
  const [playing, setPlaying] = useState(false);
  const imageURL = useLoadImage(song);

  const Icon = playing ? BsPauseFill : BsPlayFill;
  const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave;

  const player = usePlayer();

  const [play, { pause, sound }] = useSound(songURL, {
    volume: volume,
    onplay: () => setPlaying(true),
    onend: () => {
      setPlaying(false);
      onPlayNext();
    },
    onpause: () => setPlaying(false),
    format: ["mp3", "wav"],
  });

  const handlePlay = () => {
    if (!playing) {
      return play();
    } else {
      pause();
    }
  };

  const toggleMute = () => {
    if (volume === 0) {
      setVolume(1);
    } else {
      setVolume(0);
    }
  };

  useEffect(() => {
    sound?.play();

    return () => {
      sound?.unload();
    };
  }, [sound]);

  const onPlayNext = () => {
    if (player.ids.length === 0) return;

    const currentIndex = player.ids.findIndex((id) => id === player.activeID);

    const nextSong = player.ids[currentIndex + 1];

    if (!nextSong) return player.setID(player.ids[0]);

    player.setID(nextSong);
  };

  const onPlayPrevious = () => {
    if (player.ids.length === 0) return;

    const currentIndex = player.ids.findIndex((id) => id === player.activeID);

    const previousSong = player.ids[currentIndex - 1];

    if (!previousSong) return player.setID(player.ids[player.ids.length - 1]);

    player.setID(previousSong);
  };

  return (
    <div className="md:grid-cols-3 grid h-full grid-cols-2">
      {/* PC and tablet player */}
      <div className="flex items-center justify-start w-full h-16">
        <div className="gap-x-4 flex items-center">
          <div className="gap-x-3 hover:bg-neutral-800/50 flex items-center w-full p-2 rounded-md cursor-pointer">
            <div className="min-h-[56px] min-w-[56px] relative rounded-md overflow-hidden">
              <Image
                fill
                src={imageURL || "/image/liked.webp"}
                alt={song.title}
                className="object-cover"
              />
            </div>
            <div className="gap-y-1 flex flex-col overflow-hidden">
              <p className="text-white truncate text-[15px]">{song.title}</p>
              <p className="text-neutral-400 text-[13px] truncate">
                {song.author}
              </p>
            </div>
          </div>
          <LikeButton songID={song.id} />
        </div>
      </div>
      {/* Mobile player */}
      <div className="md:hidden flex items-center justify-end w-full col-auto">
        <div
          onClick={handlePlay}
          className=" flex items-center justify-center w-10 h-10 p-1 bg-white rounded-full cursor-pointer"
        >
          <Icon size={30} className="text-black" />
        </div>
      </div>
      <div className="hidden h-full md:flex justify-center items-center w-full max-w-[722px] gap-x-6">
        <AiFillStepBackward
          onClick={onPlayPrevious}
          size={30}
          className="text-neutral-400 hover:text-white transition cursor-pointer"
        />
        <div
          onClick={handlePlay}
          className="flex items-center justify-center w-10 h-10 p-1 bg-white rounded-full cursor-pointer"
        >
          <Icon size={30} className="text-black" />
        </div>
        <AiFillStepForward
          onClick={onPlayNext}
          size={30}
          className="text-neutral-400 hover:text-white transition cursor-pointer"
        />
      </div>

      <div className="md:flex justify-end hidden w-full pr-2">
        <div className="flex items-center gap-x-2 w-[120px]">
          <VolumeIcon
            onClick={toggleMute}
            className="cursor-pointer"
            size={34}
          />
          <Slider value={volume} onChange={(value) => setVolume(value)} />
        </div>
      </div>
    </div>
  );
}

export default PlayerContent;
