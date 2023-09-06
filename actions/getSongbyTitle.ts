// searching songs by title

import { Song } from "@/types/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import getSong from "./getSong";

export default async function getSongbyTitle(title: string): Promise<Song[]> {
  const supabase = createServerComponentClient({
    cookies,
  });

  if (!title) {
    const allSongs = await getSong();
    return allSongs;
  }

  const { data, error } = await supabase
    .from("songs")
    .select("*")
    .ilike("title", `%${title}%`)
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error);
    return [];
  }

  return data as Song[];
}
