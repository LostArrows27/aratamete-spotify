"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

type ListItemProps = {
  image: string;
  name: string;
  href: string;
};

function ListItem({ image, name, href }: ListItemProps) {
  const router = useRouter();

  return (
    <article
      className="group gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 relative flex items-center pr-4 overflow-hidden transition rounded-md"
      onClick={() => router.push(href)}
    >
      <div className="relative min-w-[64px] min-h-[64px]">
        <Image className="object-cover" src={image} alt={name} fill />
      </div>
      <p className="py-5 font-medium truncate">{name}</p>
      <div className=" drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110 absolute flex items-center justify-center p-4 transition bg-green-500 rounded-full opacity-0">
        <FaPlay className="text-black" />
      </div>
    </article>
  );
}

export default ListItem;
