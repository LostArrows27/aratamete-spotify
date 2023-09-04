"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

function Library() {
  const openUploadModal = () => {
    // handle open upload modal
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
      <div className="gap-y-2 flex flex-col px-3 mt-4"></div>
    </div>
  );
}

export default Library;
