"use client";

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Button from "./Button";

function LogoutButton() {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();

  const logout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    //TODO: reset any song is playing
    router.refresh();

    if (error) {
      toast.error(error.message);
    } else {
      console.log("test");

      toast.success("Logged out!");
    }
  };

  return (
    <Button onClick={logout} className=" px-6 py-2 bg-white">
      Logout
    </Button>
  );
}

export default LogoutButton;
