"use client";

import useAuthModel from "@/hooks/useAuthModal";
import Button from "./Button";

function LoginButton() {
  const authModal = useAuthModel();

  return (
    <>
      <div>
        <Button
          onClick={authModal.onOpen}
          className="text-neutral-300 font-medium bg-transparent"
        >
          Sign Up
        </Button>
      </div>
      <div>
        <Button
          onClick={authModal.onOpen}
          className="px-6 py-2 font-medium bg-white"
        >
          Log In
        </Button>
      </div>
    </>
  );
}

export default LoginButton;
