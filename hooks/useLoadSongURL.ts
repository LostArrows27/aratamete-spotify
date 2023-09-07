import { Song } from "@/types/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function useLoadSongURL(song: Song | undefined): string {
  const supabase = useSupabaseClient();

  if (!song) return "";

  const { data } = supabase.storage.from("songs").getPublicUrl(song.song_path);

  return data.publicUrl;
}
