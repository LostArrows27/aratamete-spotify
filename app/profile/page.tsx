"use client";

import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Profile() {
  const { user } = useUser();

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      return router.push("/");
    }

    console.log(user);
  }, [router, user]);
  //   email. name, fullname

  return <div className="px-6 py-2">Profile page</div>;
}

export default Profile;
