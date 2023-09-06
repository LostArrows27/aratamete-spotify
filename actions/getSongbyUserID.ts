import { Song } from "@/types/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function getSongbyUserID(): Promise<Song[]> {
  const supabase = createServerComponentClient({
    cookies,
  });

  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionError) {
    console.log(sessionError?.message);
  }

  const { data: songData, error: songError } = await supabase
    .from("songs")
    .select("*")
    .eq("user_id", sessionData.session?.user.id)
    .order("created_at", { ascending: false });

  if (songError) {
    console.log(songError?.message);
  }

  return (songData as Song[]) || [];
}
