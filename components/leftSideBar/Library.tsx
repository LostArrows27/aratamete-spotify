"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModel from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";
import { Song } from "@/types/types";
import MediaItem from "./MediaItem";

interface LibraryProps {
  songs: Song[];
}

function Library({ songs }: LibraryProps) {
  const authModel = useAuthModel();
  const uploadModal = useUploadModal();
  const { user, subscription } = useUser();

  const openUploadModal = () => {
    if (!user) {
      return authModel.onOpen();
    }

    //TODO: check if user has subscription

    return uploadModal.onOpen();
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="gap-x-2 inline-flex items-center">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-md text-neutral-400 font-medium">Your library</p>
        </div>
        <AiOutlinePlus
          onClick={openUploadModal}
          className="text-neutral-400 hover:text-white transition cursor-pointer"
        />
      </div>
      <div className="gap-y-1 flex flex-col px-3 mt-4">
        {songs.map((item: Song) => {
          return <MediaItem key={item.id} data={item} onClick={() => {}} />;
        })}
      </div>
    </div>
  );
}

export default Library;
