import { FaPlay } from "react-icons/fa";

function PlayButton() {
  return (
    <button className="drop-shadow-md translate-y-1/4 group-hover:opacity-100 group-hover: group-hover:translate-y-0 hover:scale-110 flex items-center p-4 transition bg-green-500 rounded-full opacity-0">
      <FaPlay className="text-black" />
    </button>
  );
}

export default PlayButton;
