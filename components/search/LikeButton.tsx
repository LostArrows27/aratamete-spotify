"use client";

import useAuthModel from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

type LikeButtonProps = {
  songID: string;
};

function LikeButton({ songID }: LikeButtonProps) {
  // append userID, songID to liked_song table in supabase
  const router = useRouter();

  const { supabaseClient } = useSessionContext();

  const { user } = useUser();

  const authModel = useAuthModel();

  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    // avoid multiple requests for like
    const checkLiked = async () => {
      const { data, error } = await supabaseClient
        .from("liked_songs")
        .select("*")
        .eq("user_id", user?.id)
        .eq("song_id", songID)
        .single();

      if (!error && data) {
        setIsLiked(true);
      }
    };

    checkLiked();
  }, [songID, supabaseClient, user?.id]);

  const Icon = isLiked ? AiFillHeart : AiOutlineHeart;

  const handleLike = async () => {
    if (!user) {
      return authModel.onOpen();
    }

    if (isLiked) {
      const { error } = await supabaseClient
        .from("liked_songs")
        .delete()
        .eq("user_id", user.id)
        .eq("song_id", songID);

      if (error) return toast.error(error.message);
      return setIsLiked(false);
    }

    const { error } = await supabaseClient.from("liked_songs").insert({
      song_id: songID,
      user_id: user.id,
    });

    if (error) {
      return toast.error(error.message);
    }
    setIsLiked(true);
    toast.success("Liked!");
    router.refresh();
  };

  return (
    <button className="hover:opacity-75 transition" onClick={handleLike}>
      <Icon color={isLiked ? "#22c55e" : "white"} size={25} />
    </button>
  );
}

export default LikeButton;
