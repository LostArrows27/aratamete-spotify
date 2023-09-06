// use to get image url from supabase storage with the provided image_path

import { Song } from "@/types/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function useLoadImage(song: Song) {
  const supabase = useSupabaseClient();

  if (!song) {
    return null;
  }

  const { data: image } = supabase.storage
    .from("images")
    .getPublicUrl(song.image_path);

  return image.publicUrl;
}
